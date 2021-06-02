import AndroidIntentsURI from "./index";

test("compose intent uri", () => {
  expect(
    AndroidIntentsURI({
      scheme: "scheme",
      host: "host",
      path: "path",
      packageName: "package.io",
    })
  ).toBe("intent://host/path#Intent;package=package.io;scheme=scheme;end;");
});
