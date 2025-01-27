import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from '../AuthenticationComponets/LoginPage';
// import SignUp from '../AuthenticationComponets/signUp';
import Vendor from '../pages.jsx/Adminpage/VENDOR';
import AdminlandingPages from '../pages.jsx/Adminpage/AdminlandingPages.jsx';
import Venues from '../pages.jsx/venues/Venues.jsx';
import Portfolio from '../pages.jsx/Adminpage/Portfolio.jsx';
import Information from '../pages.jsx/Adminpage/Information.jsx';
import EditProfile from '../pages.jsx/Adminpage/EditProfile.jsx';

function AdminRoutes() {
  return (
     <Router>
         <Routes>

              {/* logi and signup */}
              
              {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/Vendor" element={<Vendor />} />
        <Route path="/Adminhomepages" element={<AdminlandingPages/>} />  
        <Route path="/Adminhomepages/service/auditorium" element={<Venues/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Information" element={<Information/>} />
        <Route path="/edit-profile" element={<EditProfile />} />




    </Routes>
      </Router>
  )
}

export default AdminRoutes
