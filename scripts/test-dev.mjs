import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const astroCli = path.join(root, "node_modules", "astro", "bin", "astro.mjs");
const baseURL = "http://127.0.0.1:4321/";

/** @param {import("node:child_process").ChildProcess} child @returns {Promise<{code: number | null, signal: NodeJS.Signals | null}>} */
function waitForExit(child) {
  return new Promise((resolve) => child.once("exit", (code, signal) => resolve({ code, signal })));
}

async function isAstroDev() {
  try {
    const response = await fetch(baseURL, { signal: AbortSignal.timeout(1000) });
    const html = await response.text();
    return response.ok && html.includes("/@vite/client");
  } catch {
    return false;
  }
}

let server;
let serverExit;
let ownsServer = false;
let exitCode = 1;

try {
  if (!await isAstroDev()) {
    const current = await fetch(baseURL, { signal: AbortSignal.timeout(500) }).catch(() => undefined);
    if (current) throw new Error("Port 4321 používá jiná služba. Uvolni port a spusť test znovu.");
    server = spawn(process.execPath, [astroCli, "dev", "--host", "127.0.0.1", "--port", "4321", "--strictPort"], {
      cwd: root,
      stdio: "inherit",
      windowsHide: true,
    });
    serverExit = waitForExit(server);
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt += 1) {
      if (await Promise.race([serverExit.then(() => true), delay(250).then(() => false)])) {
        throw new Error("Astro dev se ukončil před spuštěním testů. Zastav případný jiný Astro server projektu a zkus to znovu.");
      }
      if (await isAstroDev()) { ready = true; ownsServer = true; break; }
    }
    if (!ready) throw new Error("Astro dev se nespustil do 15 sekund.");
  }

  const child = spawn(process.execPath, [require.resolve("@playwright/test/cli"), "test"], {
    cwd: root,
    stdio: "inherit",
    windowsHide: true,
    env: { ...process.env, PLAYWRIGHT_BASE_URL: baseURL, PLAYWRIGHT_SEARCH_MODE: "fallback" },
  });
  const result = await waitForExit(child);
  exitCode = result.signal ? 1 : result.code ?? 1;
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
} finally {
  if (ownsServer) {
    const stop = spawn(process.execPath, [astroCli, "dev", "stop"], {
      cwd: root,
      stdio: "inherit",
      windowsHide: true,
    });
    await waitForExit(stop);
    if (serverExit) await Promise.race([serverExit, delay(2000)]);
    server?.kill();
  }
}

process.exitCode = exitCode;
