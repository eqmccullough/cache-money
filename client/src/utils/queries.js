//  put in front end queries
import { gql } from "@apollo/client";

export const ALL_CATEGORIES = gql`
  query allCategories {
    allCategories {
      _id
      name
    }
  }
`;

export const CATEGORY_ITEMS = gql`
  query categoryItems($categoryId: ID!) {
    categoryItems(categoryId: $categoryId) {
      _id
      name
      items {
        _id
        name
        amount
      }
    }
  }
`;

export const USER_ITEMS = gql`
  query userItems {
    userItems {
      _id
      name
      amount
    }
  }
`;
