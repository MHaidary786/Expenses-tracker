import React from 'react'
import classes from "./home.module.css"
import { BrowserRouter as  Route, Routes, Link} from 'react-router-dom';


export default function home() {
  return (
    <div>
      <div className="welcome">
      <h2>Please login First</h2>
      <Link to="/login" className="loginRoute">Login</Link>
      </div>
    </div>
  )
}
