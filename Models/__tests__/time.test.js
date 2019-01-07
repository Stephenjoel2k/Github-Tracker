const { time } = require("../time");

describe("time - Should return true or false based on the timespan condition ", () => {
  it("Should return (True) as the timespan is less than the created date", () => {
    const timespan = "10";
    const created_at = "2018-12-31T19:40:17Z";
    const result = time(timespan, created_at);
    expect(result).toBeTruthy;
  });
  it("Should return (false) as the timespan is less than the created date", () => {
    const timespan = "10";
    const created_at = "2018-12-11T19:40:17Z";
    const result = time(timespan, created_at);
    expect(result).toBeFalsy;
  });
});
