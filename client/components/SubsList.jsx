import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function handleDelete(e) {
  axios.delete(`http://localhost:3000/api/${e.target.name}`);

  setSubs((data) => {
    return data.filter((sub) => sub._id !== e.target.name);
  });
}

function SubsCard({ data }) {
  const { _id, name, price, comment } = data;
  return (
    <li key={_id}>
      <div className="subscription">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{comment}</p>
      </div>

      <div className="button-container">
        <button name={_id} className="button">
          edit
        </button>
        <button name={_id} className="button" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}

const SubsList = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/')
      .then((res) => {
        console.log(res.data);
        setSubs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Link to="/CreateSub" className="button-new">
        <button className="button">New</button>
      </Link>
      <div className="contents">
        <ul className="subs-container">
          {subs.map((data) => (
            <SubsCard data={data} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubsList;
