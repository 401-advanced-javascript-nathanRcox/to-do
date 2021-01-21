import React, {useContext, useState, useEffect} from 'react';
import './list.scss';
import { AppSettingsContext } from '../context/application-settings';

const TodoList = (props) => {
  const [nextList, setNextList] = useState([]);
  const [numPageCount, setNumPageCount] = useState([]);
  const appSettingsContext = useContext(AppSettingsContext);

  let page = props.list.slice(0, appSettingsContext.maxItems);
  
  const calcPages = () => {
    let pageButtonArray = [];
    let numPages = Math.ceil((props.list.length) / appSettingsContext.maxItems);
    // console.log({numPages})

    for (let i = 1; i <= numPages; i++) {
      pageButtonArray.push(<button key={i} name={i} onClick={nextPage}>Page {i}</button>);
    };
    setNumPageCount([pageButtonArray]);
  }

  const nextPage = (e) => {
    let pageNumber = e.target.name;
    let newPage = props.list.slice((pageNumber - 1) * appSettingsContext.maxItems, appSettingsContext.maxItems + (pageNumber - 1) * appSettingsContext.maxItems);
    setNextList(newPage);
  }

  useEffect(() => { 
    calcPages();
  }, [props])

  useEffect(() => {
    setNextList(page);
  }, [props]);

    return (
      <>
      <ul className='list-li'>
        {nextList.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
            <h5>For: {item.assignee}</h5>
            <h6>Task: {item.text}</h6>
            <h6>Difficulty: {item.difficulty}</h6>
            </span>
            <button onClick={() => props.delete(item._id)}>[X]</button>
            <button onClick={() => props.edit(item._id)}>[Edit]</button>
          </li>
        ))}
      </ul>
      <div>
        {numPageCount}
      </div>
      </>
    );
}

export default TodoList;
