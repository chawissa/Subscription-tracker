import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateSub from './components/CreateSub';
import EditSub from './components/EditSub';
import SubsList from './components/SubsList';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        {/* <br /> */}
        <Routes>
          <Route path="/" exact element={<SubsList />} />
          <Route path="/edit/:name" element={<EditSub />} />
          <Route path="/create" element={<CreateSub />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
