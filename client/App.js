import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateSub from './components/CreateSub';
import UpdateSub from './components/UpdateSub';
import SubsList from './components/SubsList';
import DisplaySub from './components/DisplaySub';
import Nav from './components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        {/* <br /> */}
        <Routes>
          <Route path="/" exact element={<DisplaySub />} />
          {/* <Route path="/edit/:id" element={<EditSub />} /> */}
          <Route path="/create" element={<CreateSub />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
