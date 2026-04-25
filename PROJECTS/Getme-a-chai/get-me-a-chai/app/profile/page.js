"use client";
import { useState, useEffect } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    bio: "",
    website: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-black dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-center font-semibold my-5" >Welcome to your dashboard</h1>

          <StatsCards />


          {/* Edit Profile Section */}
          <div className="bg-white/70 w-[60%] ml-60 dark:bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 my-6">
            <h2 className=" text-center text-3xl font-semibold mb-6">
              Edit Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block mb-1 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Razorpay Id</label>
                <input
                  name="razorpayid"
                  id="razorpayid"
                  rows="3"
                  value={formData.razorpayid?formData.razorpayid:""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Razorpay Secret</label>
                <input
                  name="razorpaysecret"
                  id="razorpaysecret"
                  rows="3"
                  value={formData.razorpaysecret?formData.razorpaysecret:""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition"
              >
                Save Changes
              </button>
            </form>
          </div>

        </main>
      </div>
    </div>
  );
}

function StatsCards() {
  const stats = [
    { label: "Total Users", value: "1,234" },
    { label: "Revenue", value: "$12.5k" },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              {stat.label}
            </h3>
            <p className="text-4xl font-bold mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
