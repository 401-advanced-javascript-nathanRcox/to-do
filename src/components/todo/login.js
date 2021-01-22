import React, { useContext, useState } from 'react';
import { LoginContext } from '../context/login-context';

function Login (props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState ('');
  // const [role, setRole] = useState('user');

  const loginContext = useContext(LoginContext);

  const handleSubmit = e => {
    e.preventDefault();
    loginContext.login(username, password);
  };

  const handleNameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // const handleRole = e => {
  //   setRole(e.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" onBlur={handleNameChange}/>
      <input type="password" name="password" placeholder="password" onBlur={handlePasswordChange}/>
      {/* <select name="role" onChange={handleRole}>
        <option value="user">User</option>
        <option value="editor">Editor</option>
        <option value="admin">Administrator</option>
      </select> */}
      <button type="submit">Go!</button>
    </form>
  )
}

export default Login;
