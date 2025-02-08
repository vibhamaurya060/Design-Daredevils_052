
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login';


import PropertyListing from './Pages/PropertyListing';

import SinglePageDetails from './Pages/SinglePageDetails.jsx'
import Home from './Pages/Home.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx'

import PrivateRoutes from './routes/PrivateRoutes.jsx';
import AdminDashboard from './Admin/AdminDashboard';
import PageNotFound from './Pages/PageNotFound.jsx';
import Admin from './Pages/Admin.jsx';
// import PrivateRoutes from "./routes/PrivateRoutes.jsx"


function App() {


  return (
<>
{/* <p>Frontend</p> */}

      <Routes>
  
      <Route path="/propertylisting" element={<PrivateRoutes><PropertyListing/></PrivateRoutes>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

   

      {/* Shivam Page */}
      <Route path="/" element={<Home />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path='/adminDashboard' element={<AdminDashboard/>} />
      <Route path='/admin' element={<Admin/>}/>
      
      <Route path='*' element={<PageNotFound/>}/>
      <Route path="/details/:id" element={<SinglePageDetails />} />
      <Route path="/propertylisting/:id" element={<SinglePageDetails />} />
     
      </Routes>
    
</>
   
  )
}

export default App
