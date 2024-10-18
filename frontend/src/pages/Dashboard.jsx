// Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">
              Profile
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-400">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h3>
          <p>This is your main content area. You can add charts, tables, or anything else here.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-medium">Stat 1</h4>
            <p>Some information</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-medium">Stat 2</h4>
            <p>Some information</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-medium">Stat 3</h4>
            <p>Some information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
