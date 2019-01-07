const { Counter } = require("../counters.js");

describe("LoginCount", () => {
  let sample1 = [
    { name: "ynigoreyes", add: 51, del: 29, total: 80, commits: 1 },
    { name: "ynigoreyes", add: 0, del: 2, total: 2, commits: 1 },
    { name: "stephen", add: 10, del: 4, total: 14, commits: 1 },
    { name: "stephen", add: 227, del: 37, total: 264, commits: 1 },
    { name: "madewithsmiles", add: 11, del: 4, total: 15, commits: 1 },
    { name: "ynigoreyes", add: 1, del: 0, total: 1, commits: 1 },
    { name: "ynigoreyes", add: 174, del: 5, total: 179, commits: 1 }
  ];

  let sample2 = [
    {
      name: "james",
      add: 418,
      del: 140,
      total: 558,
      commits: 11,
      changed_files: 24
    },
    {
      name: "stephen",
      add: 227,
      del: 37,
      total: 264,
      commits: 3,
      changed_files: 12
    }
  ];
  sample3 = ["stephen"];
  sample4 = ["ynigo"];
  sample5 = ["hari"];

  it("should loop through the data and return an object with the count of logins", () => {
    const result = Counter(sample1, sample2, sample3, sample4, sample5);
    expect(result).toEqual([
      { james: 11, stephen: 5, ynigoreyes: 4, madewithsmiles: 1 },
      { james: 1, stephen: 1 },
      { undefined: 1 },
      { undefined: 1 },
      { undefined: 1 },
      { james: 24, stephen: 12 },
      { james: 418, stephen: 464, ynigoreyes: 226, madewithsmiles: 11 },
      { james: 140, stephen: 78, ynigoreyes: 36, madewithsmiles: 4 },
      { james: 558, stephen: 542, ynigoreyes: 262, madewithsmiles: 15 }
    ]);
  });
});
