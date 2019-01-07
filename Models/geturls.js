const { time } = require("./time");

//Variables to separate the different event urls
let urlsPE = new Set();
let urlsPRE = new Set();
let avatar = new Set();
let members = new Set();
let created_at = new Set();
let ICE = [];
let PRRCE = [];
let CCE = [];

const GetUrls = (dataEvents, timespan) => {
  if (dataEvents === undefined) {
    return 0;
  } else {
    const events = dataEvents.filter(
      event =>
        event.type === "PushEvent" ||
        event.type === "PullRequestEvent" ||
        event.type === "IssueCommentEvent" ||
        event.type === "PullRequestReviewCommentEvent" ||
        event.type === "CommitCommentEvent"
    );
    events.forEach(event => {
      let event_created = time(event.created_at, timespan);
      if (event_created === false) {
        return;
      }
      avatar.add(event.actor.avatar_url);
      members.add(event.actor.login);
      if (event.type === "PushEvent") {
        const commits = event.payload.commits;
        commits.forEach(commit => {
          urlsPE.add(commit.url);
        });
      }
      if (event.type === "PullRequestEvent") {
        urlsPRE.add(event.payload.pull_request.url);
      }
      if (event.type === "PullRequestReviewCommentEvent") {
        PRRCE.push(event.actor.login);
      }
      if (event.type === "IssueCommentEvent") {
        ICE.push(event.actor.login);
      }
      if (event.type === "CommitCommentEvent") {
        CCE.push(event.comment.user.login);
      }
    });
    let member_names = [...members];
    let avatars = [...avatar];
    let PE = [...urlsPE];
    let PRE = [...urlsPRE];
    return (event_urls_obj = {
      PE,
      PRE,
      ICE,
      PRRCE,
      CCE,
      //Two arrays which should not be touched
      //Try to ask user to select their users
      member_names,
      avatars
    });
  }
};

module.exports = { GetUrls };
