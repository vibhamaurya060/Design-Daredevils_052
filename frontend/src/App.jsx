
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import Navbar from './Components/Navbar';
import PropertyListing from './Pages/PropertyListing';
import SinglePageDetails from './Pages/SinglePageDetails.jsx'
import Home from './Pages/Home ';
import ForgotPassword from './Pages/ForgotPassword.jsx'
import Dashboard from './Pages/Dashboard.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
// import PrivateRoutes from "./routes/PrivateRoutes.jsx"

function App() {


  return (
<>
{/* <p>Frontend</p> */}
<Navbar />
      <Routes>
  
      <Route path="/propertylisting" element={<PrivateRoutes><PropertyListing/></PrivateRoutes>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
          path="/dashboard"
          element={
            
              <Dashboard />
          }/>

      {/* Shivam Page */}
      <Route path="/" element={<Home />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
     
      <Route path="/:id" element={<SinglePageDetails />} />
      <Route path="/propertylisting/:id" element={<SinglePageDetails />} />
      </Routes>
    
</>
      
      
    
  )
}

export default App
