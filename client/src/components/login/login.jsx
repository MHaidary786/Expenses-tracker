import React from 'react'
import { useState } from 'react'
import classes from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    let newUser = {
      username: username,
      password: password
    };

    try {
      const res = await axios.post("https://expenses-tracker-mps2.onrender.com/login", newUser, {
        headers: { "Content-Type": 'application/json' }
      });

      if (res.status === 200) {
        navigate('/dashboard');
      } else {
        setError(true);
        alert("Wrong credentials! Try different ones");
      }
    } catch (error) {
      setError(true);
      alert("Wrong credentials! Try different ones");
      console.error(error);
    }
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeftSide}>
          <img src="https://ukinvestormagazine.co.uk/wp-content/uploads/2020/09/ESG-sustainable-investment.jpg" className={classes.leftImg} />
        </div>
        <div className={classes.loginRightSide}>
          <h2 className={classes.title}>Login</h2>
          <form className={classes.loginForm} onSubmit={handleLogin}>
            <input type="text" placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className={classes.submitBtn}>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </form>
          {
            error && <div className={classes.errorMessage}>
              Wrong credentials! Try different ones
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
