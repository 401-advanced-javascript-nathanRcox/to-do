import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';

import './todo-connected.scss';
import TodoForm from './form.js';
import TodoList from './list.js';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    // console.log('Item:', item);
    // console.log('Due Date:', item.due);
    fetch(todoAPI, {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        console.log('Saved Item:', savedItem);
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  // const _editItem = id => {
  //   let item = list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     let url = `${todoAPI}/${id}`;
  //     fetch(url, {
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(item),
  //     })
  //     .then(response => response.json())
  // }

  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(_getTodoItems)
      .catch(console.error)
    }
  }

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems);
  // console.log('LIST on TODO:', list);

  useEffect(() => {
    document.title = `To-do List: ${list.filter(item => !item.complete).length}`
  })
  
  return (
    <>
    <div>
      <header class="todo-header">
      <Navbar variant="light" expand="lg" sticky="top" className="nav-color-todo">        
        <h2>
          To-do List Manager ({list.filter(item => !item.complete).length})
        </h2>
      </Navbar>
      </header>
      <section className="todo">
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            delete={_deleteItem}
            // edit={_editItem}
          />
        </div>
      </section>
      </div>
    </>
  );
};

export default ToDo;