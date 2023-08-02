import React, { useState } from "react";
import CategorySelect from "./CategorySelect";
import { useQuery } from "@apollo/client"
import { ALL_CATEGORIES } from "../utils/queries"
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';



export default function Drawer() {
  const { loading, data } = useQuery(ALL_CATEGORIES)
  const categories = data?.allCategories || [];

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
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} id="drawer-pull"> What's your budgie? </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div>
              <CategorySelect 
                categories={categories}
              />
              <ul>
              <li id="custom-input">
                  <h2> Item </h2> <h2> $20.23 </h2>
                  <Fab color="secondary" sx={{ m: 1, bgcolor:"#6048a3"}} aria-label="edit">
                  <EditIcon />
                  </Fab>
                  <Fab color="secondary" sx={{ m: 1, bgcolor:"#9e4848"}} aria-label="edit">
                    <DeleteIcon />
                  </Fab>
                </li>

                <li id="custom-input">
                  <TextField sx={{ m: 1, width: "50ch" }} label="Category" variant="filled" />
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">
                      Amount
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <Fab color="primary" sx={{ m: 1, bgcolor: "#598C58" }} aria-label="add">
                    <AddIcon />
                  </Fab>
                </li>

              </ul>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
