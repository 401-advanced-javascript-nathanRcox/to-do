import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios';
// const axios = require('axios').default;
const API = process.env.REACT_APP_API;
console.log({API});
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = (username, password) => {
    const header = {'Authorization': `Basic ${btoa(`${username}:${password}`)}`}
    axios.post(`${API}/signin`, null,
    {
      headers: header
      }
    )
      .then(function (response) {
        return response.data;
      })
      .then(user => {
        console.log({user});
        validateToken(user.token);
      })
    };

  const validateToken = (token) => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLogInState(true, token, user);
    }
    catch {
      setLogInState(false, null, {});
    }
  }

  const setLogInState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(true);
    setUser(user);
  }

  const state = {
    user,
    loggedIn,
    login: signIn
  }
  console.log({state});

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;
