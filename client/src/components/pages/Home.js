import * as React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Auth from "../../utils/auth";

export default function ResponsiveGrid() {
  const bill = require('../../assets/budgie-bill.jpg')
  return (
    <> 
      <div className="home-screen">
        <img src={bill} className="bill-logo"></img>
        <h6> The only app you will ever need to manage your money and ball on a budgie.</h6>
        <div className="home-button-group"> 
        <Link to="/login"><Button id="home-button" variant="contained" sx={{ m: 1 }} size="large">Login</Button></Link>
              <Link to="/signup"><Button id="home-button" variant="contained" sx={{ m: 1 }} size="large">SignUp</Button></Link>
        </div>
      </div> 
      
        
      

    </>
  );
}
