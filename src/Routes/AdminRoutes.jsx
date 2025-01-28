import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from '../AuthenticationComponets/LoginPage';
// import SignUp from '../AuthenticationComponets/signUp';
import Vendor from "../pages.jsx/Adminpage/VENDOR";
import AdminLandingPages from "../pages.jsx/Adminpage/AdminlandingPages.jsx";
import Venues from "../pages.jsx/venues/Venues.jsx";
import Portfolio from "../pages.jsx/Adminpage/Portfolio.jsx";
import Information from "../pages.jsx/Adminpage/Information.jsx";
import SaveProfile from "../pages.jsx/Adminpage/SaveProfile.jsx";
import EditProfile from "../pages.jsx/Adminpage/EditProfile.jsx";

function AdminRoutes() {
  // State to manage profiles
  const [profiles, setProfiles] = useState([]);

  return (
    <Router>
      <Routes>
        {/* Admin Pages */}
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/Adminhomepages" element={<AdminLandingPages />} />
        <Route
          path="/admin-homepages/service/auditorium"
          element={<Venues />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/information" element={<Information />} />

        {/* Profile Management */}
        <Route
          path="/edit-profile"
          element={<EditProfile setProfiles={setProfiles} profiles={profiles} />}
        />
        <Route
          path="/save-profile"
          element={<SaveProfile profiles={profiles} />}
        />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
