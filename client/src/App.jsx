
import React, { useEffect, useState } from 'react';
import './App.css';
import AddPage from './components/addPage';
import LoginPage from './components/loginPage';
import Dashboard from './components/Dashboard';
import axios from "axios"


function App() {

  const [data, setData] = useState([])


  axios.get("http://localhost:4000")
  .then((res) => {
    setData([res.data])
  })
  
  
  
    return (
      <div className="App">
        <h1>{data}</h1>
      </div>
    );
  }
  
  export default App;
  