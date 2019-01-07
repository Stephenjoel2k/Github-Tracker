const { GetEventsFromGitHub, ParsePR, ParseC } = require("./api");
const { GetUrls } = require("./geturls");
const { GetLogins } = require("./objectify");
const { Counter } = require("./counters");
const { GetMemberStats } = require("./members");

const main = async (organization, timespan, token) => {
  const dataEvents = await GetEventsFromGitHub(organization, token);
  if (!dataEvents) {
    return;
  }
  const Urls = GetUrls(dataEvents, timespan);
  if (!Urls) {
    return;
  }
  const PE = await ParseC(Urls.PE, token);
  const PRE = await ParsePR(Urls.PRE, token);
  const ICE = GetLogins(Urls.ICE);
  const PRRCE = GetLogins(Urls.PRRCE);
  const CCE = GetLogins(Urls.CCE);
  const object_array = Counter(PE, PRE, ICE, PRRCE, CCE);
  const stats = GetMemberStats(
    Urls.member_names,
    Urls.avatars,
    object_array,
    organization
  );
  return stats;
};

module.exports = { main };
