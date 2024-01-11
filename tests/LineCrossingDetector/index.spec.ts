import { expect, test } from "@playwright/test";
import { relative } from "path";

test("LineCrossingDetector", async ({ page }) => {
  const testPath =
    "/" +
    relative(process.cwd(), new URL(import.meta.url).pathname).replace(
      "index.spec.ts",
      "index.html"
    );

  const alertMessage = new Promise<string>((resolve) =>
    page.on("dialog", (dialog) => {
      dialog.accept();
      resolve(dialog.message());
    })
  );

  await page.goto(testPath);
  expect(await alertMessage).toBe("이동하려 했으나 라인에 막혔습니다.");
});
