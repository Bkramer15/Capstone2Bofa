import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Donation from "./Pages/DonationPage";
import Volunteer from "./Pages/VolunteerPage"; // Ensure this matches your actual file name
import Register from "./Pages/Register"; //file path is correct
import Login from "./Pages/Login";
import Contact from "./Pages/ContactPage";
import MobileNavbar from "../src/Components/MobileNavbar";


function App() {
  const [clicked, isClicked] = useState(false);

  return (
    <Router>
      <Navbar />
      <MobileNavbar />
      <main>
        <Routes>
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
