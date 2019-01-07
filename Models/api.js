const axios = require("axios");

//API CALL NUMBER - 1
//CALL TO         - GITHUB
//FOR             - REQUESTING RAW EVENT DATA
//RECEIVED        - EVERYTHING FROM THE ENDPOINT - (orgs/ "organization" /events)
//RETURNS         - EVERYTHING FROM THE ENDPOINT
const GetEventsFromGitHub = async (organization, token) => {
  const url = "https://api.github.com/orgs/" + organization + "/events";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  return response.data;
};

//PULL REQUEST DATA EXTRACTION
//API CALL NUMBER - 2
//CALL TO         - GITHUB
//FOR             - REQUESTING SPECIFIC EVENT DATA FROM EVENT URLS
//RECEIVED        - Specific details about each event
//RETURNS         - An Object containing relevant information about the endpoint
const ParsePR = async (endpoint, token) => {
  var key = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  let data = [];
  await asyncForEach(endpoint, async url => {
    const response = await axios.get(url, key);
    if (response.data.user.login) {
      let name = response.data.user.login || 0;
      let commits = response.data.commits || 0;
      let add = response.data.additions || 0;
      let del = response.data.deletions || 0;
      let total = add + del;
      let changed_files = response.data.changed_files || 0;
      const PD = { name, add, del, total, commits, changed_files };
      data.push(PD);
    }
  });
  return data;
};

//PUSH EVENT DATA EXTRACTION
//API CALL NUMBER - 3
//CALL TO         - GITHUB
//FOR             - REQUESTING SPECIFIC EVENT DATA FROM EVENT URLS
//RECEIVED        - Specific details about each event
//RETURNS         - An Object containing relevant information about the endpoint
const ParseC = async (endpoint, token) => {
  var key = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  const data = [];
  await asyncForEach(endpoint, async url => {
    const response = await axios.get(url, key);
    if (response.data.author.login) {
      let name = response.data.author.login || 0;
      let stats = response.data.stats;
      let add = stats.additions || 0;
      let del = stats.deletions || 0;
      let total = stats.total || 0;
      let commits = 1;
      const CD = { name, add, del, total, commits };
      data.push(CD);
    }
  });
  return data;
};

// AsyncForEach
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

module.exports = { GetEventsFromGitHub, ParsePR, ParseC };
