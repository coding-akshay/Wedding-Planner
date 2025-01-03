import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../AuthenticationComponets/LoginPage';
import SignUp from '../AuthenticationComponets/signUp';

function AdminRoutes() {
  return (
     <Router>
         <Routes>

              {/* logi and signup */}
              
              <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

    </Routes>
      </Router>
  )
}

export default AdminRoutes
