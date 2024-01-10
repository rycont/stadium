import { expect, test } from "@playwright/test";

test("Initialize Stadium", async ({ page }) => {
  const pageURI =
    "/" +
    import.meta.url.split("stadium/")[1].replace("index.spec.ts", "index.html");
  await page.goto(pageURI);

  const stadium = await page.waitForSelector("#stadium");

  const style = await stadium.evaluate((el) => {
    const style = window.getComputedStyle(el);
    const record = {};

    for (const key of [
      "position",
      "width",
      "height",
      "--x-ratio",
      "--y-ratio",
    ]) {
      record[key] = style.getPropertyValue(key);
    }

    return record;
  });

  expect(style).toEqual({
    position: "relative",
    width: "500px",
    height: "500px",
    "--x-ratio": "1",
    "--y-ratio": "1",
  });
});
