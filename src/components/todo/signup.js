import React, { useContext, useState } from 'react';
import { SignupContext } from '../context/signup-context';

function Signup (props) {
  const [username, setUserName] = setState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const signupContext = useContext(SignupContext);

  const handleSubmit = e => {
    e.preventDefault();
    signupContext.signUp(username, password, role);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRole = e => {
    setRole(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" onBlur={handleNameChange}/>
      <input type="password" name="password" placeholder="password" onBlur={handlePasswordChange}/>
      <select name="role" onChange={handleRole}>
        <option value="user">User</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Go!</button>
    </form>
  )
}

export default Signup;
