const get = url => {
  return Promise.resolve({
    data: [
      {
        id: "8839904513",
        type: "IssueCommentEvent",
        actor: {
          login: "fhemberger",
          avatar_url: "https://avatars.githubusercontent.com/u/153481?"
        },
        created_at: "2018-12-31T12:51:41Z"
      },
      {
        id: "8839608909",
        type: "PushEvent",
        actor: {
          login: "stephenjoel2k",
          avatar_url: "https://avatars.githubusercontent.com/u/15210420?"
        },
        payload: {
          commits: [
            {
              url:
                "https://api.github.com/repos/nodejs/ecmascript-modules/commits/345d3f380bcbaa646529df424d4ac8e11026f8c9"
            },
            {
              url:
                "https://api.github.com/repos/nodejs/ecmascript-modules/commits/a3f3cfc7c52cb553d9f152bfb1ce306bbd50ba5a"
            }
          ]
        },
        created_at: "2018-12-21T09:06:52Z"
      }
    ]
  });
};

exports.get = get;
