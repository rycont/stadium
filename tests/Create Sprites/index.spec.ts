import { expect, test } from "@playwright/test";
import { relative } from "path";

test("Create Image Sprite", async ({ page }) => {
  const testPath =
    "/" +
    relative(process.cwd(), new URL(import.meta.url).pathname).replace(
      "index.spec.ts",
      "index.html"
    );

  await page.goto(testPath);
  await expect(page).toHaveScreenshot();
});
