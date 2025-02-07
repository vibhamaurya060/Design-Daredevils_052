import { Navigate } from 'react-router-dom';


import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
const {bool} = useAuth()
 
  return bool ? children :<Navigate to='/login'/>;
};

export default PrivateRoute;