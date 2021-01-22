import React, {useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API;

export const SignupContext = React.createContext();

function SignupProvider(props) {
  const [user, setUser] = useState({});
  
  const signUp = (username, password, role) => {
    axios.post(`${API}/signup`, {
      username: username,
      password: password,
      role: role
    })
      .then(function (response) {
        let signUpData = response.data;
        setUser([user, signUpData])
      })
      .catch(function (error) {
        console.log('Sign-up error:', error);
    });
  };

  const state = {
    user,
    signUp
  }

  return (
    <SignupContext.Provider value={state}>
      {props.children}
    </SignupContext.Provider>
  )
}

export default SignupProvider;

