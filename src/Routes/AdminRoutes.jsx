import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../AuthenticationComponets/LoginPage';
import SignUp from '../AuthenticationComponets/signUp';
import Vendor from '../pages.jsx/Adminpage/VENDOR';

function AdminRoutes() {
  return (
     <Router>
         <Routes>

              {/* logi and signup */}
              
              <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Vendor" element={<Vendor />} />



    </Routes>
      </Router>
  )
}

export default AdminRoutes
