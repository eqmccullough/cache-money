import React, { useState, useContext } from "react";
import CategorySelect from "./CategorySelect";
import { useQuery } from "@apollo/client";
import { ALL_CATEGORIES, CATEGORY_ITEMS, USER_ITEMS } from "../utils/queries";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import OutlinedInput from "@mui/material/OutlinedInput";

import FormHelperText from "@mui/material/FormHelperText";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpenseItems from "./ExpenseItemsList";
import Budget from "./Budget";
import { AppProvider } from "../context/AppContext";
import AddExpense from "./AddExpenseForm";

export default function Drawer() {
  const {
    data: allCatData,
    loading: allCatLoading,
    error: allCatError,
  } = useQuery(ALL_CATEGORIES);
  const categories = allCatData?.allCategories || [];

  // const { data: catItemsData, loading: catItemsLoading, error: catItemsError } = useQuery(CATEGORY_ITEMS)

  const {
    data: userItemData,
    loading: userItemLoading,
    error: userItemError,
  } = useQuery(USER_ITEMS);

  const { categoryId } = useParams();

  // const { data: catItemsData, loading: catItemsLoading, error: catItemsError } =
  //   useQuery(CATEGORY_ITEMS, {variables: {categoryId: categoryId}})
  // const categoryItems = catItemsData?.categoryItems || [];

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <div>
      <AppProvider>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} id="drawer-pull">
              {" "}
              What's your budgie?{" "}
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <div>
                <h3 className="mt-3">Expenses</h3>
                <Budget />
                <CategorySelect categories={categories} />

                <ul>
                  <ExpenseItems />

                  <AddExpense />
                </ul>
              </div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </AppProvider>
    </div>
  );
}
