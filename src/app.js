import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo-connected.js';
import './components/todo/app.scss';

const App = () => {

  return (
      <>
      <header>
      <Navbar variant="dark" expand="lg" sticky="top" className="nav-color">        
      <Navbar.Brand
          href="#home">Home</Navbar.Brand>
        </Navbar>
      </header>
        <ToDo />
      </>
    );
  }

export default App;
