const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(_, args, context, info) {
      // Validate user data
      // Make sure user doesn't already exist
      //hash password and create an auth token
    },
  },
};
