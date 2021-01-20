import { useState } from 'react';

const useForm = (callback) => {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    // console.log({item});
    callback(item); // used to be props.handleSubmit
    setItem(item);
    }

    return [
      handleInputChange,
      handleSubmit
  ];
};

export default useForm;
