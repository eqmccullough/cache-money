const { gql } = require('apollo-server-express');

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
    categories: [Category]
    categoryItems(name: String!): [Category] 
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, income: Float!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;