const GetMemberStats = (members, avatars, object_array, organization) => {
  let member_array = [],
    commits = [],
    add = [],
    del = [],
    total = [],
    CommitComments = [],
    PR = [],
    FilesChanged = [],
    IC = [],
    PRRC = [];

  let member_array_initial = [
    commits,
    PR,
    IC,
    PRRC,
    CommitComments,
    FilesChanged,
    add,
    del,
    total
  ];

  for (var i = 0; i < members.length; i++) {
    for (var j = 0; j < member_array_initial.length; j++) {
      if (object_array[j][members[i]]) {
        member_array_initial[j][i] = object_array[j][members[i]];
      } else {
        member_array_initial[j][i] = 0;
      }
    }
  }

  for (var i = 0; i < members.length; i++) {
    member_array[i] = {
      member: {
        login: members[i],
        avatar_url: avatars[i]
      },
      events: {
        commits: commits[i],
        pr: PR[i],
        issue_comments: IC[i],
        prrc: PRRC[i],
        commit_comments: CommitComments[i]
      },
      stats: {
        file_changes: FilesChanged[i],
        add: add[i],
        del: del[i],
        total: total[i]
      },
      org: organization
    };
  }
  return member_array;
};

module.exports = { GetMemberStats };
