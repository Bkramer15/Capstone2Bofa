import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import Volunteer from "./Pages/VolunteerPage"; // Ensure this matches your actual file name
import Donation from "./Pages/DonationPage";
import Register from "./Pages/Register"; //file path is correct
import Volunteers from "./Pages/Oppurtinity"
import Login from "./Pages/Logins";
import Contact from "./Pages/ContactPage";
import MobileNavbar from "../src/Components/MobileNavbar";
import Admin from "./Pages/AdminDashboard"


function App() {
  const [clicked, isClicked] = useState(false);

  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <main>
        <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Volunteers" element={<Volunteers/>} />
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
