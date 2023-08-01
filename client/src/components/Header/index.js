import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="to-be-edited" to="/login">Login</Link>
              <Link className="to-be-edited" to="/signup">Signup</Link>
              </>
          )}
      </div>
    </header>
  );
};
