import { Navigate } from 'react-router-dom';


import { useAuth } from '../Context/AuthContext';

const PrivateRoutes = ({ children }) => {
const {bool} = useAuth()
const authToken = localStorage.getItem("authToken");
  return authToken ? children :<Navigate to='/login'/>;
};

export default PrivateRoutes;