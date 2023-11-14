import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectLogin } from 'redux/selector';

export const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectLogin);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" />;
};

// PrivateRoute.propTypes = {
//   children: PropTypes.element.isRequired,
// };
