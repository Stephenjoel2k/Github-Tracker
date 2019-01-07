const moment = require("moment");
const now = moment();

const time = (event_date, timespan) => {
  if (timespan) {
    let user_select = now.diff(event_date, "days");
    return user_select <= timespan ? true : false;
  } else {
    return false;
  }
};

module.exports = { time };
