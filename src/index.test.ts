import AndroidIntentsURI from "./index";

test("test", () => {
  expect(AndroidIntentsURI("schema", "host", "path", "package.io")).toBe(
    "intent"
  );
});
