import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
        withCredentials: true
      });
      localStorage.removeItem('isLoggedIn');
      Navigate("/login");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  // Redirect to /myapp if isLoggedIn is true
  if (isLoggedIn) {
    Navigate("/myapp");
  }

  return (
    <nav className="navbar navbar-expand-md bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
          <ul className="navbar-nav nav-pills">
            {isLoggedIn ? (
              <>
                <li className="nav-item mx-2">
                  <button className="nav-link btn btn-link text-light" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/signup"
                    style={{ color: 'white' }}
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                    style={{ color: 'white' }}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
