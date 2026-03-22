import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/login-medical2.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f5f7fc] min-h-[90vh] flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          className="px-10 md:px-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#274690] leading-tight mb-6">
            Early Detection Saves <br />
            Kidneys & Lives
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Empowering nephrologists with AI-driven analytics for early-stage
            CKD detection with 99.8% precision accuracy. Start your proactive
            health journey today.
          </p>

          <div className="flex items-center gap-6">

            <button
              onClick={() => navigate("/predict")}
              className="bg-[#274690] text-white px-7 py-3 rounded-full shadow-md hover:bg-[#1e3b73] transition"
            >
              Get Started
            </button>

            

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative h-[650px] flex justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Background Shape */}
          <div className="absolute right-[-120px] top-[-80px] w-[750px] h-[750px] bg-[#eaf0ff] rounded-[50%]"></div>

          {/* Image Container */}
          <div className="absolute right-[-150px] w-[750px] h-[750px] rounded-[50%] overflow-hidden shadow-lg">

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