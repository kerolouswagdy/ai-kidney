import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#274690]">
            KidneyAI
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Pioneering the future of renal care through artificial intelligence.
            We are dedicated to making kidney disease detection early,
            accurate, and accessible for everyone.
          </p>

          <div className="flex gap-4 text-lg text-[#274690]">
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
            <FaTwitter className="cursor-pointer hover:text-blue-700" />
            <FaGithub className="cursor-pointer hover:text-blue-700" />
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="font-semibold mb-4 text-[#274690]">Platform</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-[#274690] cursor-pointer">How It Works</li>
            <li className="hover:text-[#274690] cursor-pointer">Security</li>
            <li className="hover:text-[#274690] cursor-pointer">Pricing</li>
            <li className="hover:text-[#274690] cursor-pointer">For Hospitals</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-[#274690]">Company</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li className="hover:text-[#274690] cursor-pointer">About Us</li>
            <li className="hover:text-[#274690] cursor-pointer">Careers</li>
            <li className="hover:text-[#274690] cursor-pointer">Blog</li>
            <li className="hover:text-[#274690] cursor-pointer">Press</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-[#274690]">Contact</h3>

          <div className="space-y-3 text-gray-500 text-sm">

            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-[#274690]" />
              <p>123 Innovation Dr, MedTech City, CA 94043</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#274690]" />
              <p>contact@KidneyAI.com</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#274690]" />
              <p>+1 (800) 123-4567</p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2026 NephroAI. All rights reserved. Privacy Policy | Terms of Service
      </div>

    </footer>
  );
}