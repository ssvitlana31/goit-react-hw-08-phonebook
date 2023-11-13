import React from 'react';

import Layout from './Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from 'page/Home/Home.jsx';
import Login from 'page/Login/Login.jsx';
import Register from 'page/Register/Register.jsx';
import NotFound from 'page/NotFound/NotFound.jsx';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
