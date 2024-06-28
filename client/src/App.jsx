import React, { useEffect, useState } from "react";
import "./App.css";
import AddPage from "./components/addPage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import axios from "axios";

const URL = "http://localhost:4000";

function App() {
  const [data, setData] = useState([]);

  const alltransactions = () => {
    axios.get("http://localhost:4000/alltransactions").then((res) => {
      try {
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <div className="App">
      <h1>{data}</h1>
      <Dashboard />
    </div>
  );
}

export default App;
