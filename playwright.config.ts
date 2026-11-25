import { defineConfig } from "@playwright/test";

const previewUrl = process.env.PLAYWRIGHT_BASE_URL;
const useProductionPreview = process.env.PLAYWRIGHT_PREVIEW === "1";
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  timeout: 15_000,
  expect: { timeout: 6_000 },
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: previewUrl ?? "http://127.0.0.1:4321/itworkshop/",
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 900 },
    trace: "retain-on-failure",
    ...(executablePath ? { launchOptions: { executablePath } } : {}),
  },
  ...(previewUrl && !useProductionPreview ? {} : {
    webServer: {
      command: useProductionPreview
        ? "npm run preview -- --host 127.0.0.1 --port 4322 --strictPort"
        : "npm run dev -- --host 127.0.0.1",
      url: previewUrl ?? "http://127.0.0.1:4321/itworkshop/",
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  }),
});
