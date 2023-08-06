import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    // alert("name" + name + "cost" + cost);

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_ITEM",
      payload: expense,
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <li id="custom-input">
          <TextField
            sx={{ m: 1, width: "50ch" }}
            label="Add Item"
            variant="filled"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <Fab
            type="submit"
            color="primary"
            sx={{ m: 1, bgcolor: "#598C58" }}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </li>
      </form>
    </div>
  );
};
export default AddExpense;
