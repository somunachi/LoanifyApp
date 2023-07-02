import "./App.css";
import { useState, useEffect } from "react";
import Navbar from './components/Header/Navbar'
import Side from "./components/SideMenu/Side";
import PageContent from "./components/pages/PageContent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./Context";
import Landing from './components/LandingPage/Landing';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPwd from "./components/ForgotPwd/ForgotPwd";
import Token from './components/Token/Token';
import Confirmation from './components/Confirmation/Confirmation'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (newPhoto) => {
    setPhoto(newPhoto);
  };

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    if (token.join('').length === 4) {
      localStorage.setItem('token', token);
      setLoggedIn(true);
      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    }
  };

  const handleLogout = () => {
    console.log("logout")
    localStorage.removeItem('token');
    setLoggedIn(false);
    // Redirect the user to the login page
    window.location.href = '/login';
  };

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <Router>
      <Context>
      <ToastContainer />

      {loggedIn ? (
        <div className="App">
      <Navbar handleLogout={handleLogout} selectedItem={selectedItem} photo={photo}/>
      <div className="sideandpage">
        <Side />
        <PageContent selectedItem={selectedItem}  onItemSelected={handleItemSelected} handlePhotoChange={handlePhotoChange}/>
      </div>
       </div>
      ):(
        <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/forgotpwd" element={<ForgotPwd/>}/>
        <Route exact path="/token" element={<Token/>}/>
        <Route exact path="/confirmation" element={<Confirmation/>}/>
        </Routes>
        )
      }
        </Context>
    </Router>
        // <Route path='/change-password' element={< ParentChangePsw/>}/>

  );
}

export default App;

