import React from 'react';

const SubsList = ({ subInfos, handleEdit, handleDelete }) => {
  const { _id, name, price, comment } = subInfos;
  return (
    <li key={_id}>
      <div className="subscription">
        <h2>{name}</h2>
        <h1></h1>
        <p>{price}</p>
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

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import EditSub from './EditSub';

// // import { Link } from 'react-router-dom';

// function SubsCard({ data, handleEdit, handleDelete }) {
//   const { _id, name, price, comment } = data;
//   return (
//     <li key={_id}>
//       <div className="subscription">
//         <h3>{name}</h3>
//         <p>{price}</p>
//         <p>{comment}</p>
//       </div>

//       <div className="button-container">
//         <button name={_id} className="button" onClick={handleEdit}>
//           edit
//         </button>
//         <button name={_id} className="button" onClick={handleDelete}>
//           delete
//         </button>
//       </div>
//     </li>
//   );
// }

// const SubsList = () => {
//   const [subs, setSubs] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [id, setId] = useState('');
//   const [update, setUpdate] = useState(false);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/')
//       .then((res) => {
//         console.log(res.data);
//         setSubs(res.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [update]);

//   function handleEdit(e) {
//     setId(e.target.name);
//     setOpen(true);
//   }

//   function handleUpdate() {
//     console.log('update:', update, !update);
//     setUpdate(!update);
//   }

//   function handleDelete(e) {
//     axios.delete(`http://localhost:3000/api/${e.target.name}`);

//     setSubs((data) => {
//       return data.filter((sub) => sub._id !== e.target.name);
//     });
//   }

//   function handleClose() {
//     setId('');
//     setOpen(false);
//   }

//   return (
//     <div className="container">
//       {/* <Link to="/Create" className="button-new">
//         <button className="button">New</button>
//       </Link> */}
//       <div className="contents">
//         <ul className="subs-container">
//           {subs.map((data) => (
//             <SubsCard
//               data={data}
//               handleEdit={handleEdit}
//               handleDelete={handleDelete}
//             />
//           ))}
//         </ul>
//       </div>
//       {open ? (
//         <div className="update-container">
//           <div className="update-contents">
//             <p onClick={handleClose} className="close">
//               X
//             </p>
//             <EditSub
//               _id={id}
//               handleClose={handleClose}
//               handleUpdate={handleUpdate}
//             />
//           </div>
//         </div>
//       ) : (
//         ''
//       )}
//     </div>
//   );
// };

export default SubsList;
