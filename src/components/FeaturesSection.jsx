import React from "react";
import { FaBrain, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Analysis",
    desc: "Our deep learning models analyze complex renal biomarkers instantly, identifying subtle patterns that traditional methods might miss.",
  },
  {
    icon: <FaClock />,
    title: "Real-Time Results",
    desc: "Get comprehensive diagnostic reports in seconds, not days. Fast-track your treatment plans with immediate insights.",
  },
  {
    icon: <FaShieldAlt />,
    title: "HIPAA Compliant",
    desc: "Your medical data is encrypted and protected with enterprise-grade security, fully compliant with global healthcare standards.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white px-6">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-3">
          Why Choose KidneyAI?
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto">
          We combine advanced machine learning algorithms with medical expertise
          to provide reliable, fast, and accessible kidney health monitoring.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-900 rounded-lg mb-4 text-xl">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}