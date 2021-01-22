import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo-connected.js';
import Signup from './components/context/signup-context';
import Login from './components/todo/login';
import './components/todo/app.scss';
import AppSettingsContext from './components/context/application-settings';
import LoginContext from './components/context/login-context';
import SignupContext from './components/context/signup-context';

const App = () => {

  return (
    <>
    <SignupContext>
      <LoginContext>
        <AppSettingsContext>
            <Navbar variant="dark" expand="lg" sticky="top" className="nav-color">
              <Navbar.Brand
                href="#home">Home
              </Navbar.Brand>
                <Signup />
              <Login />
            </Navbar>
          <ToDo />
        </AppSettingsContext>
      </LoginContext>
    </SignupContext>
    </>
  );
}

export default App;
