const { GetEventsFromGitHub, ParseC, ParsePR } = require("../api");

describe("GetEventsFromGitHub", () => {
  it("Fetch events data from Gihub events endpoint", async () => {
    const dataEvent = await GetEventsFromGitHub();
    const type = dataEvent[0].type;
    const login = dataEvent[0].actor.login;
    expect(type).toEqual("IssueCommentEvent");
    expect(login).toEqual("fhemberger");
  });
});

describe("ParsePR", () => {
  it("Fetch detailed events data from Gihub each event's pull endpoint", async () => {
    const data = await ParsePR();
  });
});

describe("ParseC", () => {
  it("Fetch detailed events data from Gihub each event's commits endpoint", async () => {
    const data = await ParseC();
  });
});
