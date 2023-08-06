import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //copying existing state and overriding it with new expenses object
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    // case "DELETE_ITEM":
    //   return {
    //     ...state,
    //     expenses: state.expenses.filter(
    //       (expense) => expense.id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "clothing", cost: 40 },
    { id: 13, name: "gas", cost: 45 },
    { id: 14, name: "gifts", cost: 500 },
  ],
};

export const AppContext = createContext();
// state object
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
