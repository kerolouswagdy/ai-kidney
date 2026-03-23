import React from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import heroImg from "../assets/login-medical2.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f5f7fc] min-h-[90vh] flex items-center overflow-hidden py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center w-full px-4 md:px-10 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#274690] leading-tight mb-6">
            Early Detection Saves <br />
            Kidneys & Lives
          </h1>

          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
            Empowering nephrologists with AI-driven analytics for early-stage
            CKD detection with 99.8% precision accuracy. Start your proactive
            health journey today.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/predict")}
              className="bg-[#274690] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#1e3b73] transition"
            >
              Get Started
            </button>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Background Shape */}
          <div className="hidden md:block absolute -top-20 right-[-120px] w-[600px] h-[600px] bg-[#eaf0ff] rounded-full"></div>

          {/* Image Container */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg">
            <img
              src={heroImg}
              alt="Doctor"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}