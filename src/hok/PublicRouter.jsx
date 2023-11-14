import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from 'redux/selector';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(selectLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
