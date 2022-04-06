import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Subscription Tracker
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Subscriptions
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create new
              </Link>
            </li>
          </ul>
        </div>
        {/* <h1>MERN Stack Subscription Tracker</h1> */}
      </nav>
    </>
  );
};

export default Nav;
