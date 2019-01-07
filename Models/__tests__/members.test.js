const { GetMemberStats } = require("../members");

describe("GetMemberStats", () => {
  it("Should return an array of objects consisting of a member's stats", () => {
    const members = ["stephen", "john"];
    const avatars = ["hhtps.stephen", "hhtps.john"];
    object_array = [
      { stephen: 30, john: 8 },
      { stephen: 1, john: 1 },
      {},
      {},
      {},
      { stephen: 24, john: 12 },
      { stephen: 3447, john: 1382 },
      { stephen: 2480, john: 502 },
      { stephen: 5927, john: 1884 }
    ];
    const organization = "Family";

    const result = GetMemberStats(members, avatars, object_array, organization);
    expect(result).toEqual([
      {
        events: {
          commit_comments: 0,
          commits: 30,
          issue_comments: 0,
          pr: 1,
          prrc: 0
        },
        member: {
          avatar_url: "hhtps.stephen",
          login: "stephen"
        },
        org: "Family",
        stats: {
          add: 3447,
          del: 2480,
          file_changes: 24,
          total: 5927
        }
      },
      {
        events: {
          commit_comments: 0,
          commits: 8,
          issue_comments: 0,
          pr: 1,
          prrc: 0
        },
        member: {
          avatar_url: "hhtps.john",
          login: "john"
        },
        org: "Family",
        stats: {
          add: 1382,
          del: 502,
          file_changes: 12,
          total: 1884
        }
      }
    ]);
  });
});
