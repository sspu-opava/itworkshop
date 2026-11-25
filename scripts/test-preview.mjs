import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const baseURL = "http://127.0.0.1:4322";
const server = spawn(process.execPath, [path.join(root, "node_modules", "astro", "bin", "astro.mjs"), "preview", "--host", "127.0.0.1", "--port", "4322", "--strictPort"], {
  cwd: root,
  stdio: "inherit",
  windowsHide: true,
});

/** @param {import("node:child_process").ChildProcess} child @returns {Promise<{code: number | null, signal: NodeJS.Signals | null}>} */
function waitForExit(child) {
  return new Promise((resolve) => child.once("exit", (code, signal) => resolve({ code, signal })));
}

const serverExit = waitForExit(server);
let resultCode = 1;
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    const exited = await Promise.race([serverExit.then(() => true), delay(250).then(() => false)]);
    if (exited) throw new Error("Astro preview se ukončil před spuštěním testů.");
    try {
      const response = await fetch(baseURL, { signal: AbortSignal.timeout(1000) });
      if (response.ok) { ready = true; break; }
    } catch { /* Server is still starting. */ }
  }
  if (!ready) throw new Error("Astro preview se nespustil do 15 sekund.");

  const child = spawn(process.execPath, [require.resolve("@playwright/test/cli"), "test"], {
    cwd: root,
    stdio: "inherit",
    windowsHide: true,
    env: { ...process.env, PLAYWRIGHT_BASE_URL: baseURL, PLAYWRIGHT_SEARCH_MODE: "pagefind" },
  });
  const childExit = waitForExit(child);
  child.on("error", (error) => console.error(`Playwright se nepodařilo spustit: ${error.message}`));
  const result = await childExit;
  resultCode = result.signal ? 1 : result.code ?? 1;
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
} finally {
  server.kill();
  await Promise.race([serverExit, delay(2000)]);
}
process.exitCode = resultCode;
