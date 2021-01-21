import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo-connected.js';
import './components/todo/app.scss';
import AppSettingsContext from './components/context/application-settings';

const App = () => {

  return (
      <>
      <header>
        <Navbar variant="dark" expand="lg" sticky="top" className="nav-color">        
        <Navbar.Brand
          href="#home">Home
        </Navbar.Brand>
        </Navbar>
      </header>
      <AppSettingsContext>
        <ToDo />
      </AppSettingsContext>
      </>
    );
  }

export default App;
