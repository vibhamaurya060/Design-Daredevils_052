
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import PropertyListing from './Pages/PropertyListing';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';

function App() {


  return (
    <>
      {/* <p>Frontend</p> */}
      
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/propertylisting" element={<PropertyListing/>}/>
      <Route path="/propertylisting" element={<PropertyListing />} />
     <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>}/>
      </Routes>
    
    </>
  )
}

export default App
