import React from 'react';
import './list.scss';

// class TodoList extends React.Component {

const TodoList = (props) => {
console.log('PROPS:', props);
  // render() {
    return (
      <ul class='list-li'>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >

            <span onClick={() => props.handleComplete(item._id)}>
            <h5>{item.assignee}:</h5>
            <h6>{item.text}</h6>
            </span>
            <button onClick={() => props.delete(item._id)}>[X]</button>
            <button onClick={() => props.edit(item._id)}>[Edit]</button>

          </li>
          // <li>
          // </li>
        ))}
      </ul>
    );
  // }
}

export default TodoList;