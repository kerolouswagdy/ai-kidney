import React from "react";
import aboutImg from "../assets/login-medical.jpg";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutImg}
          alt="bg"
          className="w-full h-full object-cover"
        />

        {/* BLUE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e4b8bcc] via-[#2e4b8bcc] to-transparent"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        
        <div className="w-full max-w-6xl rounded-[30px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-10 flex flex-col md:flex-row gap-10">

          {/* LEFT TEXT */}
          <div className="flex-1 text-white">
            <h1 className="text-[42px] md:text-[50px] font-bold leading-tight mb-6">
              About KidneyAI:
              <br />
              Advanced AI for Kidney Disease Detection & Monitoring
            </h1>

            <p className="text-white/85 text-[17px] leading-relaxed max-w-lg">
              Our cutting-edge algorithms enable early detection and continuous
              monitoring of kidney diseases. We provide accurate insights that
              support better medical decisions and improve patient outcomes.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col gap-6">

            {/* CARD 1 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-md">
              
              {/* double border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#2e4b8b]/30 pointer-events-none"></div>

              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Improving healthcare outcomes through the power of AI. We are
                dedicated to providing accurate, accessible, and early kidney
                disease detection to empower patients and doctors.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Our Team
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                A multidisciplinary team of nephrologists, data scientists, and
                AI engineers committed to medical innovation.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}