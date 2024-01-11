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

  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("ArrowRight");
  await page.keyboard.press("ArrowLeft");

  await page.waitForTimeout(250 * 6);
  await expect(page).toHaveScreenshot();
});
