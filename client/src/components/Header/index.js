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
        <Link to="/" id="unstyled"><h1 className="app-title">Budgie</h1></Link>
      <div>
        {Auth.loggedIn() ? (
              <>
            <span>Account: {Auth.getProfile().data.username}</span>
            <button id='user-button' onClick={logout}>Logout</button>
            </>
          ) : (
              <>
              <Link to="/login"><Button id="user-button" variant="contained" sx={{ m: 1 }} size="small">Login</Button></Link>
              <Link to="/signup"><Button id="user-button" variant="contained" sx={{ m: 1 }} size="small">SignUp</Button></Link>
              </>
          )}
        </div>
        </div>
  );
};
