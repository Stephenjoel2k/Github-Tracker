const { GetLogins } = require("../objectify");

describe("GetLogins", () => {
  it("should convert an array of logins to an array of object", () => {
    const sample = ["stephen", "john", "joel"];
    const object = GetLogins(sample);
    expect(object[0]).toEqual({ name: "stephen" });
  });
});
