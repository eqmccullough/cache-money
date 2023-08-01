import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


import Auth from "../../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header to-be-edited-for-styling">
      <div>
        <h1>Cache Money Records</h1>
      </div>
      <div>
          {Auth.loggedIn() ? (
              <>
              <span>Account: {Auth.getProfile().data.username}</span>
            <button className='to-be-changed' onClick={logout}>Logout</button>
            </>
          ) : (
              <>
              <Link to="/login"><Button className="to-be-edited" variant="contained">Login</Button></Link>
              <Link to="/signup"><Button className="to-be-edited" variant="contained">SignUp</Button></Link>
              </>
          )}
      </div>
    </header>
  );
};
