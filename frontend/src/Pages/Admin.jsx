import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import '../styles/Admin.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Admin = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [adminData, setAdminData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    document.body.classList.add("admin-background");

    return () => {
      document.body.classList.remove("admin-background"); // Remove when leaving page
    };
  }, []);

  // fetch api & store it
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://adminlogin-a1540-default-rtdb.asia-southeast1.firebasedatabase.app/AdminLogin.json')
      const data = await res.json();

      setAdminData([...data]);
    }
    fetchData()
  }, [])

  // check name & password via api
  function handleSubmit(e) {
    e.preventDefault();
    if (text == "" || password == "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return
    }


    let flag = false;
    adminData.map((el) => {
      // if input section is empty then get alert


      // if user Name and Pasword Both are Correct
      if (el.Name == text && el.PassWord == password) {

        Swal.fire({
          title: `Welcome, Admin ${text}!`,
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
        flag = true
        localStorage.setItem('AdminName', text);
        navigate('/adminDashboard');
        return
      }
    })

    // if user Name and Pasword Both are inCorrect
    if (!flag) {
      Swal.fire({
        title: "Access Denied",
        text: "Invalid credentials. Please try again!",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      return
    }
  }


  return (
    <>

      <div className="admin-container">
        <h4>Hi, Admin 👋</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button type="submit" className='bg-blue-500 pt-2 pb-2'>Submit</button>
        </form>
      </div>

    </>

  )
}

export default Admin
