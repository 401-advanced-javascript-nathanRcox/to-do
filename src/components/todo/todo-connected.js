import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';
import './todo-connected.scss';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAxios from '../hooks/axios-hook';

const ToDo = () => {

  const [list, _addItem, _toggleComplete, _deleteItem, _getTodoItems] = useAxios();

  useEffect(_getTodoItems, []);

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