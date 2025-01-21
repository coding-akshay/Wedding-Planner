import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from '../AuthenticationComponets/LoginPage';
// import SignUp from '../AuthenticationComponets/signUp';
import Vendor from '../pages.jsx/Adminpage/VENDOR';
import AdminlandingPages from '../pages.jsx/Adminpage/AdminlandingPages.jsx';
import Venues from '../pages.jsx/venues/Venues.jsx';
import SSRConventionAC from '../pages.jsx/venues/SSR Convention AC.jsx';

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

    </Routes>
      </Router>
  )
}

export default AdminRoutes
