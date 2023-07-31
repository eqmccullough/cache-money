const { convertNodeHttpToRequest } = require('apollo-server-core');
const { AuthenticationError } = require('apollo-server-express')
const { Category, Item, Profile, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async (parent, { username }) => {
            const params = username ? { username }
        },
        me: async (parent, args, context) => {
            if (context.profile) {
                return Profile.findOne({ _id: context.profile._id}).populate('categories')
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No user found with this email');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);

            return { token, user };
        },

    }
}
