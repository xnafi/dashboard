import {
    FaEdit,
    
    FaDollarSign,
    FaShoppingCart,
    FaUser,
    FaLock,
    FaMapMarkerAlt,
    FaBell,
    
  } from "react-icons/fa";
  import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
  
  
  
  const ECommerceCustomerAddress = () => {
    const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    return (
      <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
        {/* Order Header */}
        <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
          <div>
            <h3 className="text-lg font-semibold">Customer ID #634759</h3>
            <p className="text-sm text-gray-500">Aug 17, 2020, 5:48 (ET)</p>
          </div>
          <button className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded">
            Delete customer
          </button>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section - User Profile & Premium */}
          <div>
            {/* User Profile */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-80">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.postimg.cc/Tw4rMhxh/Avatar.png"
                  alt="User"
                  className="w-24 h-24"
                />
                <h2 className="text-xl font-semibold mt-2 text-gray-600">Seth Hallam</h2>
                <p className="text-gray-500 text-sm">Customer ID #634759</p>
              </div>
  
              {/* Orders & Spent Section */}
              <div className="flex justify-between my-4">
                <div className="flex items-center gap-2">
                  <FaShoppingCart className="text-indigo-500 text-xl" />
                  <div>
                    <p className="text-lg font-semibold text-gray-600">184</p>
                    <p className="text-gray-500 text-sm">Orders</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-indigo-500 text-xl" />
                  <div>
                    <p className="text-lg font-semibold text-gray-600">$8456</p>
                    <p className="text-gray-500 text-sm">Spent</p>
                  </div>
                </div>
              </div>
  
              <h2 className="text-lg font-semibold text-gray-600">Details</h2>
              <hr className="my-4" />
  
              {/* User Details */}
              <div className="text-sm">
                <p className="mb-1 text-gray-600">
                  <strong>Username:</strong> shal.lamb
                </p>
                <p className="mb-1 text-gray-600">
                  <strong>Billing Email:</strong> shallamb@gmail.com
                </p>
                <p className="mb-1 text-gray-600">
                  <strong>Status:</strong>{" "}
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium">
                    Active
                  </span>
                </p>
                <p className="mb-1 text-gray-600">
                  <strong>Contact:</strong> +1 (234) 464-0600
                </p>
                <p className="mb-1 text-gray-600">
                  <strong>Country:</strong> Peru
                </p>
              </div>
  
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center">
                <FaEdit className="mr-2" /> Edit Details
              </button>
            </div>
  
            {/* Upgrade to Premium */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 w-72 mt-6 text-white relative">
              <h3 className="text-lg font-semibold">Upgrade to premium</h3>
              <p className="text-sm mt-1">
                Upgrade customer to <br /> premium membership to <br /> access pro
                features.
              </p>
              <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg w-full font-semibold">
                Upgrade To Premium
              </button>
              <img
                src="https://i.postimg.cc/jdhW0Ltc/3d-space-rocket-with-smoke-23-2148938939-2.png"
                alt="Rocket"
                className="absolute -right-0 -top-0 w-28"
              />
            </div>
          </div>
  
          {/* Right Section */}
          <div className="col-span-2">
            {/* Top Navigation */}
            <div className="flex space-x-6 mb-4">
              {[
                { name: "Overview", icon: <FaUser className="mr-2" /> },
                { name: "Security", icon: <FaLock className="mr-2" /> },
                {
                  name: "Address & Billing",
                  icon: <FaMapMarkerAlt className="mr-2" />,
                },
                { name: "Notifications", icon: <FaBell className="mr-2" /> },
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`flex items-center py-2 px-4 font-semibold ${
                    index === 0 ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {tab.icon} {tab.name}
                </button>
              ))}
            </div>
  
            {/* Right Side - Change Password */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 dark:bg-gray-800  dark:text-white">
        <div className="bg-white rounded-2xl  dark:bg-gray-800  dark:text-white">
          <h3 className="text-lg font-semibold">Change Password</h3>

          {/* Password Requirements Alert */}
          <div className="bg-orange-100 text-orange-600 dark:text-orange-400 dark:bg-transparent p-4 rounded-lg mt-4">
            <p className="font-semibold">Ensure that these requirements are met</p>
            <p className="text-sm">Minimum 8 characters long, uppercase & symbol</p>
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* New Password */}
            <div>
              <label className="text-sm font-medium">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border rounded-md px-3 py-2 mt-1 dark:bg-gray-800  dark:text-white"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full border rounded-md px-3 py-2 mt-1 dark:bg-gray-800  dark:text-white"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Change Password Button */}
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md w-48">
            Change Password
          </button>
        </div>
      </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default ECommerceCustomerAddress;
  