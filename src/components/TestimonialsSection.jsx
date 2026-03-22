import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f7fc] py-20 px-10">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold text-[#274690] mb-3">
          Trusted by Professionals
        </h2>

        <p className="text-gray-500">
          See what medical experts and patients are saying about NephroAI.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#274690] text-white p-3 rounded-full">
            <FaQuoteLeft />
          </div>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            "NephroAI has revolutionized how we screen for early-stage CKD.
            The accuracy is unmatched and it saves us valuable time in diagnosis."
          </p>

          <h4 className="mt-6 font-semibold text-gray-700">
            Dr. James Wilson
          </h4>

          <p className="text-gray-400 text-sm">
            Nephrologist, General Hospital
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#274690] text-white p-3 rounded-full">
            <FaQuoteLeft />
          </div>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            "The interface is incredibly user-friendly. I was able to upload my
            patient’s data and get a second opinion within minutes."
          </p>

          <h4 className="mt-6 font-semibold text-gray-700">
            Dr. Emily Chen
          </h4>

          <p className="text-gray-400 text-sm">
            Internal Medicine Specialist
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#274690] text-white p-3 rounded-full">
            <FaQuoteLeft />
          </div>

          <p className="text-gray-500 mt-6 text-sm leading-relaxed">
            "As a patient, knowing that AI is checking my health gives me peace
            of mind. The report was easy to understand and very detailed."
          </p>

          <h4 className="mt-6 font-semibold text-gray-700">
            Michael Brown
          </h4>

          <p className="text-gray-400 text-sm">
            Patient
          </p>
        </div>

      </div>

    </section>
  );
}
