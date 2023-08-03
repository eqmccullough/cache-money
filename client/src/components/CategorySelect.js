import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ItemList from './ItemList';
import { CATEGORY_ITEMS } from '../utils/queries';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function CategorySelect({ categories }) {
  // if(!categories) {
  //   return <MenuItem>No Categories</MenuItem>
  // }
  // const theme = useTheme();
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState(categoryId || '');

  

  const queryOptions = categoryName
  ? { variables: { categoryId: categoryName } }
  : undefined;
  const { data: catItemsData, loading: catItemsLoading, error: catItemsError } = useQuery(CATEGORY_ITEMS, queryOptions)
  console.log(catItemsData);

    // {variables: {categoryId: categoryName}});
  const categoryItems = catItemsData?.categoryItems?.items || [];
  const catName = catItemsData?.categoryItems?.name || [];
  console.log(catName);


  const handleChange = (event) => {
    // const { target: { value } } = event;
    const selectedCatId = event.target.value;
    // console.log(`Selected Category ID: ${selectedCatId}`);
    // console.log( value);
    // console.log(event.target.value)
    // console.log(categoryItems);
    setCategoryName(selectedCatId);
    // console.log(categoryItems);
  };
  console.log('Category Items:', categoryItems);
  return (
    <>
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="category-select"
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category._id}
              value={category._id}
              // style={getStyles(category, categoryName, theme)}
            >
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    <div>
            {/* console.log('Category Items:', categoryItems); */}
            <ItemList categoryItems={ categoryItems } />
        
    </div>
    </>
  );
}