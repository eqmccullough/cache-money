const { AuthenticationError } = require("apollo-server-express");
const {
  Category,
  Item,
  // Profile,
  User,
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    categories: async () => {
      return Category.find();
    },
    categoryItems: async (parent, { name }, context) => {
      if (context._id) {
        return (await Category.findOne({ name })).populate("items");
      }
    },
    me: async (parent, args, context) => {
      if (context._id) {
        return User.findOne({ _id: context._id }).populate({
          path: "categories",
          populate: {
            path: "items",
            match: {
              userId: {
                $eq: context._id,
              },
            },
          },
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, income }) => {
      const user = await User.create({ username, email, password, income });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
