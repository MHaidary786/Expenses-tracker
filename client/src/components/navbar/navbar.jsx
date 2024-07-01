import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for Link
import { AiOutlineHome, AiOutlineLogout, AiOutlineAppstoreAdd, AiOutlineDashboard } from 'react-icons/ai';
import classes from "./navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.navcontainer}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a className={classes.title} onClick={() => navigate('/')}>Expense Tracker</a>
        </div>
        <div className={classes.right}>
        <a class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" onClick={() => navigate('/add')}>
        <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New
      </a>
        <AiOutlineDashboard className={classes.dashboardIcon} onClick={() => navigate("/dashboard")} alt="Dashboard" />
          <AiOutlineHome className={classes.homeIcon} onClick={() => navigate('/')} />
          <AiOutlineLogout className={classes.logoutIcon} onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
}
