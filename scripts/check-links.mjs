import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = path.join(root, "dist");

/** @param {string} directory @returns {Promise<string[]>} */
async function htmlFiles(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await htmlFiles(absolute));
    else if (entry.isFile() && entry.name.endsWith(".html")) result.push(absolute);
  }
  return result;
}

try {
  if (!(await stat(site)).isDirectory()) throw new Error("Chybí složka dist. Nejprve spusť npm run build.");
  const pages = await htmlFiles(site);
  const missing = [];
  for (const page of pages) {
    const relative = path.relative(site, page).split(path.sep).join("/");
    const pageUrl = relative.endsWith("/index.html")
      ? `/${relative.slice(0, -"index.html".length)}`
      : `/${relative}`;
    const html = await readFile(page, "utf8");
    const attributes = /\b(?:href|src|action)\s*=\s*(["'])(.*?)\1/gi;
    for (const match of html.matchAll(attributes)) {
      const value = match[2]?.trim();
      if (!value || value.startsWith("#")) continue;
      let url;
      try { url = new URL(value, `https://local.test${pageUrl}`); }
      catch { missing.push(`${relative}: neplatná cesta ${value}`); continue; }
      if (url.origin !== "https://local.test") continue;
      let pathname;
      try { pathname = decodeURIComponent(url.pathname); }
      catch { missing.push(`${relative}: neplatné kódování ${value}`); continue; }
      const targetRelative = path.posix.normalize(pathname.replace(/^\/+/, ""));
      const target = path.resolve(site, ...targetRelative.split("/"));
      const escape = path.relative(site, target);
      if (escape === ".." || escape.startsWith(`..${path.sep}`) || path.isAbsolute(escape)) {
        missing.push(`${relative}: cesta opouští dist ${value}`);
        continue;
      }
      const filePath = pathname.endsWith("/") ? path.join(target, "index.html") : target;
      try {
        if (!(await stat(filePath)).isFile()) missing.push(`${relative}: chybí ${value}`);
      } catch {
        missing.push(`${relative}: chybí ${value}`);
      }
    }
  }
  if (missing.length) {
    console.error(`Nalezeno ${missing.length} nefunkčních lokálních odkazů:`);
    for (const item of missing) console.error(`- ${item}`);
    process.exitCode = 1;
  } else {
    console.log(`Zkontrolováno ${pages.length} HTML stránek, všechny lokální odkazy a zdroje existují.`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
