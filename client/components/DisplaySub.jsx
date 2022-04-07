import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SubsList from './SubsList';
import UpdateSub from './UpdateSub';

const DisplaySub = () => {
  const [id, setId] = useState('');
  const [update, setUpdate] = useState(false);
  const [infoSub, setInfoSub] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/')
      .then((res) => {
        console.log(res.data);
        setInfoSub(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [update]);

  const handleEdit = (e) => {
    setId(e.target.name);
    setModal(true);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const handleClose = () => {
    setId('');
    setModal(false);
  };

  const handleDelete = (e) => {
    axios.delete(`http://localhost:3000/api/${e.target.name}`);
    setInfoSub((data) => {
      return data.filter((sub) => sub._id !== e.target.name);
    });
  };

  return (
    <section className="sub-container">
      <Link to="/create" className="sub-btn-new">
        <button className="sub-btn">Add new subscription</button>
      </Link>
      <section className="sub-data">
        <h1></h1>
        <ul className="sub-list-block">
          {infoSub.map((subInfo, index) => (
            <SubsList
              key={index}
              subInfos={subInfo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      {modal ? (
        <section className="update-container">
          <div className="update-sub-data">
            <p onClick={handleClose} className="close">
              X
            </p>

            <UpdateSub
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ''
      )}
    </section>
  );
};

export default DisplaySub;
