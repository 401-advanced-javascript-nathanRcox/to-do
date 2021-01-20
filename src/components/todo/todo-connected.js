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
const axios = require('axios').default;

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const todoAPI = 'http://localhost:3001/todo';

// const todoAPI = 'https://nrc-api-server.herokuapp.com/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       console.log('Saved Item:', savedItem);
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

  const _addItem = (item => {
    // console.log({item});
    item.due = new Date();
    axios.post(todoAPI, {
      text: item.text,
      assignee: item.assignee,
      difficulty: item.difficulty })
      .then(function (response) {
        let savedItem = response.data;
        setList([...list, savedItem])
      })
      .catch(function (error) {
        console.log('Add-item error:', error);
      })
  })

  // const _toggleComplete = id => {
  //   let item = list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let url = `${todoAPI}/${id}`;
  //     fetch(url, {
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(item)
  //     })
  //       .then(response => response.json())
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .catch(console.error);
  //   }
  // };

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    // console.log({item})
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      axios.put(url, {
        complete: item.complete,
      })
        .then(response => {
          setList(list.map(listItem => listItem._id === item._id ? response.data : listItem));
        })
        .catch(console.error);
    }
  }

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

  // const _deleteItem = id => {
  //   let item = list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     let url = `${todoAPI}/${id}`;
  //     fetch(url, {
  //       method: 'delete',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //     })
  //       .then(response => response.json())
  //       .then(_getTodoItems())
  //       .catch(console.error)
  //   }
  // }

  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/${id}`;
      axios.delete(url)
        .then(response => console.log({response}))
        .then(() => _getTodoItems()) // or .then(_getTodoItems);
        .catch(console.error)
    }
  }

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log('DATA:', data);
  //       setList(data)
  //     })
  //     .catch(console.error);
  // };

  const _getTodoItems = () => {
    axios.get(todoAPI)
      .then(response => {
        // console.log('Response:', response);
        setList(response.data)
      })
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);
  // console.log('LIST on TODO:', list);

  useEffect(() => {
    document.title = `To-do List: ${list.filter(item => !item.complete).length}`
  });

  console.log('LIST:', list);
  return (
    <>
      <div>
        <header className="todo-header">
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