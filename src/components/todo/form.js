import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './form.scss';

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

const TodoForm = (props) => {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem(item);
    }

  // render() {
    return (
      <div class="form">
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <Button type="submit" variant="primary">Add Item</Button>{' '}
          
        </form>
      </div>
    );
  // }
}

export default TodoForm;