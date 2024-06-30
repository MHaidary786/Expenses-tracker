import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for Link
import { AiOutlineHome, AiOutlineLogout, AiOutlineAppstoreAdd } from 'react-icons/ai';
import classes from "./navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.navcontainer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a href="#home" className={classes.title}>Expense Tracker</a>
        </div>
        <div className={classes.right}>
        <AiOutlineHome className={classes.homeIcon} onClick={() => navigate('/')} />
          <AiOutlineAppstoreAdd className={classes.add} onClick={() => navigate('/add')} />
          <AiOutlineLogout className={classes.logoutIcon} onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
}
