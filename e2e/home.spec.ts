import { expect, test } from "@playwright/test";

test("home page renders and reports backend status", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("iSaaS Vendor Portal");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("iSaaS Vendor Portal");
  // The status streams in after the shell; with no backend it shows the failure reason.
  await expect(page.getByText(/^Backend:/)).toBeVisible();
});
