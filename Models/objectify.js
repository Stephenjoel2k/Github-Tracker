const GetLogins = event_array => {
  let logins = [];
  for (var i = 0; i < event_array.length; i++) {
    logins.push({ name: event_array[i] });
  }
  return logins;
};

module.exports = { GetLogins };
