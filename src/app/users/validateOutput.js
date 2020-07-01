"use strict";
const { omit } = require("lodash");

module.exports = {
  async userResponse(data, done) {
    let response = {
      _id: data._id || "",
      username: data.username || "",
    };
    done(response);
  },
  async loginResponse(data, token, done) {
    let response = {
      _id: data || "",
      token: token || "",
    };
    done(response);
  },
  async getAllResponse(docs, done) {
    return done({
      records: await Promise.all(
        docs.map(async (data) => {
          return {
            _id: data._id || "",
            username: data.username,
            created: data.created || 0,
          };
        })
      ),
    });
  },
  async userDetailResponse(data, done) {
    let response = {
      _id: data._id || "",
      username: data.username || "",
      email: data.email || "",
      password: data.password || "",
      created: data.created || "",
    };
    done(response);
  },
};
