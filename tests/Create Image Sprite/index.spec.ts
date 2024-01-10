import { expect, test } from "@playwright/test";

test("Create Image Sprite", async ({ page }) => {
  const pageURI =
    "/" +
    import.meta.url.split("stadium/")[1].replace("index.spec.ts", "index.html");

  console.log(pageURI);
  await page.goto(pageURI);

  await expect(page).toHaveScreenshot();
});
