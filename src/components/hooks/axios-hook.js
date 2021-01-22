import { useState } from 'react';
import cookie from 'react-cookies';

const axios = require('axios').default;

const todoAPI = process.env.REACT_APP_API;

let token = cookie.load('auth');
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const useAxios = () => {
  const [list, setList] = useState([]);

  const _addItem = (item => {
    // console.log({item});
    item.due = new Date();
    axios.post(`${todoAPI}/api/v2/todo`, {
      text: item.text,
      assignee: item.assignee,
      difficulty: item.difficulty
    })
      .then(function (response) {
        let savedItem = response.data;
        setList([...list, savedItem])
      })
      .catch(function (error) {
        console.log('Add-item error:', error);
      })
  })

  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    // console.log({item})
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/api/v2/todo/${id}`;
      axios.put(url, {
        complete: item.complete,
      })
        .then(response => {
          setList(list.map(listItem => listItem._id === item._id ? response.data : listItem));
        })
        .catch(console.error);
    }
  }

  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/api/v2/todo/${id}`;
      axios.delete(url)
        .then(response => console.log({ response }))
        .then(() => _getTodoItems()) // or .then(_getTodoItems);
        .catch(console.error)
    }
  }

  const _getTodoItems = () => {
    axios.get(`${todoAPI}/api/v2/todo/`)
      .then(response => {
        // console.log('Response:', response);
        setList(response.data)
      })
      .catch(console.error);
  };

  return [
    list,
    _addItem,
    _toggleComplete,
    _deleteItem,
    _getTodoItems
  ]
}

export default useAxios;
