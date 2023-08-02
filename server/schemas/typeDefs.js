const { gql } = require("apollo-server-express");

// const typeDefs = `
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    categories: [Category]!
    income: Float
  }

  type Category {
    _id: ID
    name: String
    items: [Item]!
  }

  type Item {
    _id: ID
    name: String
    amount: Float
    userId: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allCategories: [Category]
    categories: [Category]
    categoryItems(categoryId: ID!): Category
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      income: Float!
    ): Auth
    login(email: String!, password: String!): Auth
    addCategory(name: String!): Category
    addItem(name: String!, amount: Float!, userId: ID!, categoryId: ID!): Item
    removeItem(categoryId: ID!, itemId: ID!): Item
    updateItem(itemId: ID!, newAmount: Float!): Item
  }
`;

module.exports = typeDefs;
