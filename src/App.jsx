import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Predict from "./pages/Predict";
import SignIn from "./pages/SignIn";   
import SignUp from "./pages/SignUp";  
import AboutPage from "./pages/AboutPage";

import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import FeaturesSection from "./components/FeaturesSection";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white text-gray-900 min-h-screen">

        <Navbar />

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <TestimonialsSection/>
                <Footer/>
              </>
            }
          />

          {/* Pages */}
          <Route path="/predict" element={<Predict />} />
          <Route path="/about" element={<AboutPage />} />


          {/* Auth */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}