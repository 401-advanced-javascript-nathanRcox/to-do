import { useState } from 'react';
const axios = require('axios').default;

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const todoAPI = 'http://localhost:3001/todo';

// const todoAPI = 'https://nrc-api-server.herokuapp.com/todo';

const useAxios = () => {
  const [list, setList] = useState([]);

  const _addItem = (item => {
    // console.log({item});
    item.due = new Date();
    axios.post(todoAPI, {
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

  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      let url = `${todoAPI}/${id}`;
      axios.delete(url)
        .then(response => console.log({ response }))
        .then(() => _getTodoItems()) // or .then(_getTodoItems);
        .catch(console.error)
    }
  }

  const _getTodoItems = () => {
    axios.get(todoAPI)
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
