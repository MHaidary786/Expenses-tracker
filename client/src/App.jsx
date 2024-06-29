import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import AddPage from "./components/addPage"
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddPage/>} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
