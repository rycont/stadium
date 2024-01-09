import { expect, test } from "@playwright/test";
import { join } from "path";

console.log(join(import.meta.url, "../index.html"));

test("Initialize Stadium", async ({ page }) => {
  await page.goto(join(import.meta.url, "../index.html"));
  await expect(page.title()).resolves.toMatch("Document");
});
