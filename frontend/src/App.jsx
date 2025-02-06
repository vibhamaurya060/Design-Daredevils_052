
import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';


function App() {


  return (
    <>
      {/* <p>Frontend</p> */}
      
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    
    </>
  )
}

export default App
