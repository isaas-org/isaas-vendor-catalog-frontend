import { defineConfig, devices } from "@playwright/test";

const port = 3001;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Runs against a production build. BACKEND_API_URL defaults to a port nothing
  // listens on, so tests don't depend on a running backend unless one is given.
  webServer: {
    command: "npm run build && npm run start",
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      BACKEND_API_URL: process.env.BACKEND_API_URL ?? "http://localhost:59999",
    },
  },
});
