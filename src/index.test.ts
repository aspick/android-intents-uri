import AndroidIntentsURI from "./index";

test("compose intent uri", () => {
  expect(AndroidIntentsURI("scheme", "host", "path", "package.io")).toBe(
    "intent://host/path#Intent;package=package.io;scheme=scheme;end;"
  );
});
