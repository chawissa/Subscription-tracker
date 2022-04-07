import React from 'react';

const SubsList = ({ subInfos, handleEdit, handleDelete }) => {
  const { _id, name, price, comment } = subInfos;
  return (
    <li key={_id}>
      <div className="subscription">
        <h2>{name}</h2>
        <h1></h1>
        <p>${price}</p>
        <p>{comment}</p>
      </div>
      <h1></h1>

      <div className="sub-btn-container">
        <button name={_id} className="sub-btn" onClick={handleEdit}>
          edit
        </button>
        <button name={_id} className="sub-btn" onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
};

export default SubsList;
