import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import Home from 'page/Home/Home.jsx';
import Login from 'page/Login/Login.jsx';
import Register from 'page/Register/Register.jsx';
import NotFound from 'page/NotFound/NotFound.jsx';
import Contacts from 'page/ContactsPage/ContactsPage.jsx';
import { Loader } from './Loader/Loader.jsx';

import { refreshThunk } from 'redux/Auth/operations.js';
import { PrivateRoute } from 'hok/PrivateRoute.jsx';
import PublicRoute from 'hok/PublicRouter.jsx';
import { selectRefresh } from 'redux/selector.js';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return refresh ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
