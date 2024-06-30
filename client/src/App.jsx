import React from "react";
import { Route, Routes} from 'react-router-dom';
import "./App.css";
import AddPage from "./components/add/addTransaction"
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";


function App() {
  return (
    <div className="App">
      
      <Navbar/>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
