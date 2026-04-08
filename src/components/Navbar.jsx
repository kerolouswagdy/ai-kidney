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
    { name: "Ai", path: "/Predict" },
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
      } catch {
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
        const res = await axios.get(
          "http://localhost:8000/api/notifications",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNotifications(res.data);
      } catch {}
    };
    fetchNotifications();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-teal-500 text-xl">⚕</span>
          <h1 className="font-semibold text-gray-700 text-lg">
            KidneyAI
          </h1>
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
        <div className="flex items-center gap-2 md:gap-4">

          {/* Notifications */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Bell size={20} />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
                    {notifications.length}
                  </span>
                )}
              </button>

              <div
                className={`absolute right-0 mt-2 w-72 sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden transition ${
                  notificationsOpen ? "block" : "hidden"
                }`}
              >
                <div className="p-3 font-semibold border-b">
                  Notifications
                </div>
                {notifications.length === 0 ? (
                  <p className="p-3 text-sm text-gray-500">
                    No notifications
                  </p>
                ) : (
                  notifications.map((n, i) => (
                    <div key={i} className="p-3 border-b text-sm">
                      {n.message}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Guest */}
          {!user && (
            <div className="hidden sm:flex gap-2">
              <Link
                to="/signin"
                className="px-3 py-1 border rounded-full text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/Signup"
                className="px-4 py-1.5 bg-[#2e4b8b] text-white rounded-full text-sm"
              >
                Register
              </Link>
            </div>
          )}

          {/* User */}
          {user && (
            <div className="relative hidden sm:block">
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 bg-[#708fd1] text-white px-3 py-1.5 rounded-lg cursor-pointer"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#2e4b8b] font-bold">
                  {user.name?.charAt(0)}
                </div>
                <span className="text-sm">{user.name}</span>
              </div>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 ${
                  profileOpen ? "block" : "hidden"
                }`}
              >
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/profile">
                  Profile
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/settings">
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col p-4 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b"
            >
              {link.name}
            </Link>
          ))}

          {!user && (
            <>
              <Link to="/signin" className="py-2">
                Sign In
              </Link>
              <Link to="/Signup" className="py-2">
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              <Link to="/profile" className="py-2">
                Profile
              </Link>
              <button onClick={logout} className="text-left py-2 text-red-500">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}