const { GetUrls } = require("../geturls");
const { GetEventsFromGitHub } = require("../api");

describe("GetUrls", () => {
  it("Takes Raw data from Github endpoint and returns urls of selected events", async () => {
    const timespan = 100;
    const dataEvent = await GetEventsFromGitHub();
    const urls = GetUrls(dataEvent, timespan);
    expect(urls.PE).toEqual([
      "https://api.github.com/repos/nodejs/ecmascript-modules/commits/345d3f380bcbaa646529df424d4ac8e11026f8c9",
      "https://api.github.com/repos/nodejs/ecmascript-modules/commits/a3f3cfc7c52cb553d9f152bfb1ce306bbd50ba5a"
    ]);
    expect(urls.ICE).toEqual(["fhemberger"]);
  });
  it("Takes Raw data from Github endpoint and returns urls of selected events", async () => {
    const timespan = 5;
    const dataEvent = await GetEventsFromGitHub();
    const urls = GetUrls(dataEvent, timespan);
    expect(urls.PE).toBeFalsy;
    expect(urls.ICE).toBeFalsy;
  });
});
