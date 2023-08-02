// const { AuthenticationError } = require('apollo-server-express')
const {
  Category,
  Item,
  // Profile,
  User,
} = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
<<<<<<< HEAD
    categories: async (parent, args, context) => {
      console.log(context.user);
      return Category.find().populate({
        path: "items",
        match: { userId: { $eq: context.user._id } },
      });
    },
    // categoryItems: async (parent, { name }, context) => {
    //     return Category.findOne({ name: name })
    // },
    me: async (parent, args, context) => {
      // console.log(context);
      if (context.user._id) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "categories",
          populate: {
            path: "items",
            match: {
              userId: {
                $eq: context.user._id,
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

=======
    allCategories: async () => {
      return Category.find().populate("items");
    },
    categories: async (parent, args, context) => {
      console.log(context.user);
      return Category.find().populate({
        path: "items",
        match: {
          userId: {
            $eq: context.user._id,
          },
        },
      });
    },
    // userCategories: async (parent, { userId }, context) => {
    //   if (context.user._id) {
    //     return User.findOne()
    //   }
    // },

    categoryItems: async (parent, { categoryId }, context) => {
      if (context.user._id) {
        const currentCategory = await Category.findOne({
          _id: categoryId,
        }).populate({
          path: "items",
          match: {
            userId: {
              $eq: context.user._id,
            },
          },
        });
        console.log(currentCategory);
        return currentCategory;
      }
    },
    me: async (parent, args, context) => {
      console.log(context.user);
      if (context.user._id) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "categories",
          populate: {
            path: "items",
            match: {
              userId: {
                $eq: context.user._id,
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
    addCategory: async (parent, { name }) => {
      const category = await Category.create({ name });
      return category;
    },
    addItem: async (parent, { name, amount, userId, categoryId }) => {
      const item = await Item.create({ name, amount, userId });

      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $addToSet: { items: item._id } }
      );

      return item;
    },
    removeItem: async (parent, { categoryId, itemId }) => {
      await Category.findOneAndUpdate(
        { _id: categoryId },
        { $pull: { items: { _id: itemId } } },
        { new: true }
      );

      return Item.findOneAndDelete({ _id: itemId });
    },
    updateItem: async (parent, { itemId, newAmount }) => {
      return Item.findOneAndUpdate(
        { _id: itemId },
        { $set: { amount: newAmount } },
        { new: true }
      );
    },
  },
};

>>>>>>> dd7a24f7376dce8ef855d876f95d2bc0b8e2cfe7
module.exports = resolvers;
