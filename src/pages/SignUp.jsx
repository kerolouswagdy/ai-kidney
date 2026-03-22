import React, { useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Phone } from "lucide-react";
import registerImg from "../assets/login-medical.jpg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/register", {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        phone: formData.phone,
        password: formData.password,
      });

      // تسجيل ناجح
      window.location.href = "/signin";
    } catch (err) {
      console.log("Register Error Full Response:", err.response?.data);

      // أولاً: لو message موجودة
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } 
      // ثانياً: لو فيه errors array من Laravel
      else if (err.response?.data?.errors) {
        const firstError = Object.values(err.response.data.errors)[0][0];
        setError(firstError);
      } 
      // أي خطأ غير معروف
      else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="flex bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={registerImg}
            alt="Medical AI"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-700">KidneyAI</h1>
            <h2 className="text-xl font-medium mt-2">Create Account</h2>
            <p className="text-gray-500 text-sm mt-1">
              Create your account to manage diabetic nephropathy cases with AI
              assistance.
            </p>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Gender */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Password (at least 8 characters)"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#2e4b8b] text-white py-2 rounded-lg hover:bg-[#4a7de0] transition"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?
            <Link to="/signin" className="text-blue-600 ml-1 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}