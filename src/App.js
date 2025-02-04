import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";



export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white">
          <div className="flex justify-around">
            <a href="/" className="hover:underline">Signup</a>
            <a href="/Login" className="hover:underline">Login</a>
            <a href="/Dashboard" className="hover:underline">Dashboard</a>
          </div>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
