import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateSub = () => {
  const [subInfo, setSubInfo] = useState({ name: '', price: 0, comment: '' });

  function handleChange(e) {
    setSubInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/', subInfo)
      .then((res) => {
        setSubInfo({ name: '', price: 0, comment: '' });
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error: couldn't create new subscription");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <Link to="/">
        <button type="button" className="sub-btn sub-btn-back">
          back
        </button>
      </Link>

      <section className="sub-data">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={subInfo.name}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={subInfo.price}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="comment">
            Comment
          </label>
          <input
            type="text"
            name="comment"
            value={subInfo.comment}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="sub-btn">
            Add subscription
          </button>
        </form>
      </section>
    </section>
  );
};

export default CreateSub;
