import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogout, AiOutlineAppstoreAdd } from 'react-icons/ai';
import classes from "./navbar.module.css"

export default function Navbar() {
  
  return (
    <div className={classes.navcontainer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a href="#home" className={classes.title}>Expense Tracker</a>
        </div>
        <div className={classes.right}>
        <Link to="/" className={classes.homeLink}><AiOutlineHome className={classes.homeIcon} /></Link>
          <Link to="/add" className={classes.addLink}><AiOutlineAppstoreAdd className={classes.add} /></Link>
          <Link to="/" className={classes.logoutLink}><AiOutlineLogout className={classes.logoutIcon} /></Link>
        
        </div>
      </div>
    </div>
  );
}
