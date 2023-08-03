import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
// import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

// const categories = [
//   'Essentials',
//   'Non-Essentials',
//   'Savings',
//   'Add New Category'
// ];

// function getStyles(category, categoryName, theme) {
//   return {
//     fontWeight:
//       categoryName.indexOf(category) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function CategorySelect({ categories }) {
  // if(!categories) {
  //   return <MenuItem>No Categories</MenuItem>
  // }
  // const theme = useTheme();
  const [categoryName, setCategoryName] = useState('');
console.log(categories);
  const handleChange = (event) => {
    const { target: { value } } = event;
    // console.log( value);
    // console.log(event.target.value)
    setCategoryName(value);
  };

  return (
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
              value={category.name}
              // style={getStyles(category, categoryName, theme)}
            >
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}