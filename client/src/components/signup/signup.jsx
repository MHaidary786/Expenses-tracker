import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './signup.module.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const addNewUser = async (e) => {
    e.preventDefault();
    let newUser = {
      name: name,
      lastname: lastname,
      username: username,
      password: password,
    };

    try {
      await axios.post('http://localhost:4000/signup', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Clear form fields after successful submission
      setName('');
      setLastname('');
      setUsername('');
      setPassword('');

      // Set success message and navigate to login after 3 seconds
      setError('Your account has been created!');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <div className={classes.signUpContainer}>
      <div className={classes.signUpWrapper}>
        <div className={classes.signUpLeftSide}>
          <img
            src="https://ukinvestormagazine.co.uk/wp-content/uploads/2020/09/ESG-sustainable-investment.jpg"
            className={classes.leftImg}
            alt="Signup"
          />
        </div>
        <div className={classes.signUpRightSide}>
          <h2 className={classes.title}>SignUp</h2>
          <form className={classes.signUpForm} onSubmit={addNewUser}>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={classes.submitBtn}>
              Create account
            </button>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
          {error && <div className={classes.errorMessage}>{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
