import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateSub = () => {
  const [data, setData] = useState({ name: '', price: 0, comment: '' });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const sub = {
      name: data.name,
      price: data.price,
      comment: data.comment,
    };

    console.log({ sub });
    axios
      .post('http://localhost:3000/api/', data)
      .then((res) => {
        setData({ name: '', price: 0, comment: '' });
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error couldn't create sub");
        console.log(err.message);
      });
  }

  return (
    <div className="container">
      <Link to="/" className="button-back">
        <button type="button" className="button">
          back
        </button>
      </Link>
      <div className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="comment">
            Comment
          </label>
          <input
            type="text"
            name="comment"
            value={data.comment}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Add subscription
          </button>
        </form>
      </div>
    </div>
    // <div>
    //   <p>CreateSub Component</p>
    // </div>
  );
};

export default CreateSub;
