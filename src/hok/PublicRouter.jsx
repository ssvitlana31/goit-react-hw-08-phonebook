import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogin } from 'redux/selector';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(selectLogin);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;

// PublickRoute.propTypes = {
//   children: PropTypes.element.isRequired,
// };
