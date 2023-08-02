import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import '../../styles/home.css'


import Auth from "../../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      <div className="header-container">
        <h1 className="app-title">Cache Money Records</h1>
      <div>
          {Auth.loggedIn() ? (
              <>
              <span>Account: {Auth.getProfile().data.username}</span>
            <button className='to-be-changed' onClick={logout}>Logout</button>
            </>
          ) : (
              <>
              <Link to="/login"><Button className="to-be-edited" variant="contained" sx={{ m: 1 }}>Login</Button></Link>
              <Link to="/signup"><Button className="to-be-edited" variant="contained" sx={{ m: 1 }}>SignUp</Button></Link>
              </>
          )}
        </div>
        </div>
  );
};
