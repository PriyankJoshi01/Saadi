import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./compoments/Navbar"
import Home from "./compoments/Home.jsx"
import About from "./compoments/About.jsx"
import Contact  from "./compoments/Contact.jsx";
import Gallery from "./compoments/Gallery.jsx";
import ProfileDetails from "./compoments/ProfileDetails.jsx";

 

 

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
