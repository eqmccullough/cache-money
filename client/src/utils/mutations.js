import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $income: Float!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      income: $income
    ) {
      token
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_ITEM = gql`

  mutation addItem($name: String!, $amount: Float!, $categoryId: ID!) {
    addItem(name: $name, amount: $amount, categoryId: $categoryId) {
      _id
      amount
      name
      userId {
        _id
        username
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($itemId: ID!, $newAmount: Float!) {
    updateItem(itemId: $itemId, newAmount: $newAmount) {
      _id
      name
      amount
      userId {
        _id
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($categoryId: ID!, $itemId: ID!) {
    removeItem(categoryId: $categoryId, itemId: $itemId) {
      _id
      name
      userId {
        _id
      }
    }
  }
`;

