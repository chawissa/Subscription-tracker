import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const EditSub = ({ _id, handleClose, handleEdited }) => {
  const [data, setData] = useState({ name: '', price: 0, comment: '' });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ _id }, { data });

    axios
      .put(`http://localhost:3000/api/`, data)
      .then((res) => {
        setData({ name: '', price: 0, comment: '' });
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Failed to update subscription');
        console.log(err.message);
      });
  }

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
        handleEdited(e);
        handleClose();
      }}
    >
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="input"
      />
      <label className="label" htmlFor="price">
        Price
      </label>
      <input
        type="text"
        name="price"
        onChange={handleChange}
        className="input"
      />
      <label className="label" htmlFor="comment">
        Comment
      </label>
      <input
        type="text"
        name="comment"
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
    // <div>
    //   <p>EditSub Component</p>
    // </div>
  );
};

export default EditSub;
