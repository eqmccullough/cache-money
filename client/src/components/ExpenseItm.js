import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import "../styles/home.css";
import ClearIcon from "@mui/icons-material/Clear";
import HomeIcon from "@mui/icons-material/Home";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  //   const { dispatch } = useContext(AppContext);
  //   const handleDeleteExpense = () => {
  //     dispatch({
  //       type: "DELETE_EXPENSE",
  //       payload: props.id,
  //     });
  //   };
  return (
    <div key={props._id} className="col-12 m-3 p-3">
      <div id="custom-item" className="p-3 m-3 bg-dark text-light">
        <h5
          className="card-header"
          style={{ fontSize: "1.7rem", fontWeight: "bolder" }}
        >
          {props.name}:
          <span
            id="item-amount"
            style={{ fontSize: "1.7rem", fontWeight: "bold" }}
            sx={{ m: 1 }}
          >
            ${props.cost}
          </span>
        </h5>
        <div id="item-amount">
          <Fab
            color="secondary"
            sx={{ m: 1, bgcolor: "#6048a3" }}
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
          <Fab
            color="secondary"
            sx={{ m: 1, bgcolor: "#9e4848" }}
            aria-label="edit"
          >
            <DeleteIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
