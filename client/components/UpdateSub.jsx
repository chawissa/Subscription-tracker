import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function UpdateSub({ _id, handleClose, handleUpdate }) {
  const [subInfo, setSubInfo] = useState({ name: '', price: 0, comment: '' });

  const handleChange = (e) => {
    setSubInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/api/${_id}`, subInfo)
      .then((res) => {
        setSubInfo({ name: '', price: 0, comment: '' });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
        handleUpdate();
        handleClose();
      }}
    >
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="input"
        onChange={handleChange}
      />
      <label className="label" htmlFor="name">
        Price
      </label>
      <input
        type="text"
        name="price"
        className="input"
        onChange={handleChange}
      />
      <label className="label" htmlFor="name">
        Comment
      </label>
      <input
        type="text"
        name="comment"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="sub-btn">
        Save
      </button>
    </form>
  );
}

export default UpdateSub;
