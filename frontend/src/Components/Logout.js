import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
let Logout = async (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_PROXY}auth/logout`, {}, {
        withCredentials: true
      })
      navigate("/login");
      window.location.reload();
    }
    catch (err) {
      console.log(err);
    }
  }
export default Logout;