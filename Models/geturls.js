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

const EVENTS = ["PushEvent", "PullRequestEvent", "PullRequestReviewCommentEvent", "CommitCommentEvent"]

const GetUrls = (dataEvents, timespan) => {
  if (dataEvents === undefined) return 0;
  const events = dataEvents.filter(
    event => EVENTS.includes(event)
  );

  events.forEach(event => {
    let event_created = time(event.created_at, timespan);
    if (event_created === false) return;

    avatar.add(event.actor.avatar_url);
    members.add(event.actor.login);

    switch (event.type) {
      case ("PushEvent"):
        const commits = event.payload.commits;
        commits.forEach(commit => {
          urlsPE.add(commit.url);
        });
      case ("PullRequestEvent"):
        urlsPRE.add(event.payload.pull_request.url);
      case ("PullRequestReviewCommentEvent"):
        PRRCE.push(event.actor.login);
      case ("PullRequestReviewCommentEvent"):
        ICE.push(event.actor.login);
      case ("CommitCommentEvent"):
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
};

module.exports = { GetUrls };
