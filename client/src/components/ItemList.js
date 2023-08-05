import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import "../styles/home.css";

const ItemList = ({ categoryItems }) => {
  console.log("Inside ItemList, categoryItems:", categoryItems);
  console.log(categoryItems);
  if (!categoryItems.length) {
    return <h3>No Items Found</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        {/* {ExpenseItems} */}
      </h3>
      <div className="flex-row my-4 justify-center">
        {categoryItems &&
          categoryItems.map((item) => (
            <div key={item._id} className="col-12 m-3 p-3">
              <div id="custom-item" className="p-3 m-3 bg-dark text-light">
                <h5
                  className="card-header"
                  style={{ fontSize: "1.7rem", fontWeight: "bolder" }}
                >
                  {item.name}:
                  <span
                    id="item-amount"
                    style={{ fontSize: "1.7rem", fontWeight: "bold" }}
                    sx={{ m: 1 }}
                  >
                    ${item.amount}
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
          ))}
      </div>
    </>
  );
};

export default ItemList;
