
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import PropertyListing from './Pages/PropertyListing';


function App() {


  return (
    <>
      {/* <p>Frontend</p> */}
      
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/propertylisting" element={<PropertyListing/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
       
      </Routes>
    
    </>
  )
}

export default App
