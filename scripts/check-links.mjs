import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import astroConfig from "../astro.config.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = path.join(root, "dist");
const base = `/${(astroConfig.base ?? "").replace(/^\/+|\/+$/g, "")}`.replace(/^\/$/, "");
if (!astroConfig.site) throw new Error("V konfiguraci Astro chybí adresa webu.");
const publishedOrigin = new URL(astroConfig.site).origin;

/** @param {string} directory @param {string} extension @returns {Promise<string[]>} */
async function filesWithExtension(directory, extension) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await filesWithExtension(absolute, extension));
    else if (entry.isFile() && entry.name.endsWith(extension)) result.push(absolute);
  }
  return result;
}

try {
  if (!(await stat(site)).isDirectory()) throw new Error("Chybí složka dist. Nejprve spusť npm run build.");
  const pages = await filesWithExtension(site, ".html");
  const markdown = await filesWithExtension(site, ".md");
  /** @type {string[]} */
  const missing = [];
  /** @param {string} relative @param {string} pageUrl @param {string | undefined} rawValue */
  async function checkTarget(relative, pageUrl, rawValue) {
      const value = rawValue?.trim();
      if (!value || value.startsWith("#")) return;
      let url;
      try { url = new URL(value, `https://local.test${pageUrl}`); }
      catch { missing.push(`${relative}: neplatná cesta ${value}`); return; }
      if (url.origin !== "https://local.test" && url.origin !== publishedOrigin) return;
      let pathname;
      try { pathname = decodeURIComponent(url.pathname); }
      catch { missing.push(`${relative}: neplatné kódování ${value}`); return; }
      if (base && pathname !== base && !pathname.startsWith(`${base}/`)) {
        missing.push(`${relative}: cesta je mimo ${base}: ${value}`);
        return;
      }
      const targetRelative = path.posix.normalize(pathname.slice(base.length).replace(/^\/+/, ""));
      const target = path.resolve(site, ...targetRelative.split("/"));
      const escape = path.relative(site, target);
      if (escape === ".." || escape.startsWith(`..${path.sep}`) || path.isAbsolute(escape)) {
        missing.push(`${relative}: cesta opouští dist ${value}`);
        return;
      }
      const filePath = pathname.endsWith("/") ? path.join(target, "index.html") : target;
      try {
        if (!(await stat(filePath)).isFile()) missing.push(`${relative}: chybí ${value}`);
      } catch {
        missing.push(`${relative}: chybí ${value}`);
      }
  }
  for (const page of pages) {
    const relative = path.relative(site, page).split(path.sep).join("/");
    const pageUrl = relative === "index.html" ? `${base}/` : relative.endsWith("/index.html")
      ? `${base}/${relative.slice(0, -"index.html".length)}`
      : `${base}/${relative}`;
    const html = await readFile(page, "utf8");
    const attributes = /\b(?:href|src|action)\s*=\s*(["'])(.*?)\1/gi;
    for (const match of html.matchAll(attributes)) await checkTarget(relative, pageUrl, match[2]);
  }
  for (const page of markdown) {
    const relative = path.relative(site, page).split(path.sep).join("/");
    const pageUrl = `${base}/${relative}`;
    // Příklady kódu mohou obsahovat záměrně nedokončené cesty.
    const content = (await readFile(page, "utf8")).replace(/^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[ \t]*$/gm, "");
    for (const match of content.matchAll(/\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)) await checkTarget(relative, pageUrl, match[1]);
    for (const match of content.matchAll(/\b(?:href|src)\s*=\s*(["'])(.*?)\1/gi)) await checkTarget(relative, pageUrl, match[2]);
  }
  if (missing.length) {
    console.error(`Nalezeno ${missing.length} nefunkčních lokálních odkazů:`);
    for (const item of missing) console.error(`- ${item}`);
    process.exitCode = 1;
  } else {
    console.log(`Zkontrolováno ${pages.length} HTML stránek a ${markdown.length} Markdown souborů, všechny lokální odkazy a zdroje existují.`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
