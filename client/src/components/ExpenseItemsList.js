import React, { useState, useContext } from "react";
import ExpenseItem from "./ExpenseItm";

const ExpenseItems = () => {
  const expenses = [
    { id: 1231231, name: "Rent", amount: 1750 },
    { id: 1231232, name: "Gas/Electric", amount: 25 },
    { id: 1231233, name: "Trash", amount: 11.15 },
    { id: 1231234, name: "Supplies", amount: 300 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseItems;
