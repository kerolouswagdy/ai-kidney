import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Bell, Menu, X } from "lucide-react";

export default function Navbar() {
  const loc = useLocation();
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/Predict" },
    { name: "About Us", path: "/about" },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await axios.get("http://localhost:8000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await axios.get("http://localhost:8000/api/notifications", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifications(res.data);
      } catch (err) {}
    };
    fetchNotifications();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="bg-white border-b px-4 md:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-teal-500 text-xl">⚕</span>
          <h1 className="font-semibold text-gray-700 text-lg">KidneyAI</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${
                  loc.pathname === link.path
                    ? "text-[#2e4b8b] font-semibold"
                    : "hover:text-[#2e4b8b]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Notifications */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Bell size={20} className="text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              <div
                className={`absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg overflow-y-auto max-h-96 transition-all duration-200
                  ${notificationsOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="p-3 font-semibold border-b text-gray-700">
                  Notifications
                </div>
                {notifications.length === 0 ? (
                  <div className="text-gray-500 p-3 text-sm">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                    >
                      <p className="text-sm text-gray-700">{note.message}</p>
                      <span className="text-xs text-gray-400">{note.time}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Guest Buttons */}
          {!user && (
            <>
              <Link
                to="/signin"
                className="px-4 py-1.5 border border-gray-400 rounded-full text-sm hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                to="/Signup"
                className="px-5 py-2 bg-[#2e4b8b] text-white rounded-full text-sm font-medium hover:bg-[#243d73] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </>
          )}

          {/* Logged User */}
          {user && (
            <div className="relative">
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 bg-[#708fd1] text-white px-4 py-2 rounded-xl cursor-pointer shadow-md hover:bg-[#3f5fa8] transition"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2e4b8b] font-bold">
                  {user.name?.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">{user.name}</p>
                </div>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div
                className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300
                  ${profileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute top-full left-0 w-full bg-white flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 p-4" : "max-h-0"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block py-2 ${
                  loc.pathname === link.path
                    ? "text-[#2e4b8b] font-semibold"
                    : "hover:text-[#2e4b8b]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}