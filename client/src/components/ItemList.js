import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import "../styles/home.css";
import { useMutation } from "@apollo/client";
import { REMOVE_ITEM } from "../utils/mutations";
import { CATEGORY_ITEMS } from "../utils/queries";

const ItemList = ({ categoryItems }) => {
  const [removeItem, { loading, success }] = useMutation(REMOVE_ITEM, {
    update(cache, { data: { removeItem } }) {
      try {
        cache.writeQuery({
          query: CATEGORY_ITEMS,
          data: { categoryItems: removeItem },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  if (success) {
    return <> Nice! </>
  }
  if (loading) {
    return <p> Loading... </p>;
  }

  const handleRemoveItem = async (item) => {
    try {
      const { data } = await removeItem({
        variables: {
          itemId: item._id,
          categoryId: item.categoryId,
        },
      });
      console.log("success");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
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
                    aria-label="delete"
                    onClick={() => handleRemoveItem(item)}
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
