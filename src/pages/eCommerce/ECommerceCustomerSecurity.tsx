import { FaUser, FaLock, FaMapMarkerAlt, FaBell } from "react-icons/fa";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import CustomerProfile from "../../components/re-ui/CustomerProfile";

const ECommerceCustomerSecurity = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("Security");
  const tabs = [
    { name: "Overview", icon: <FaUser className="mr-2" /> },
    { name: "Security", icon: <FaLock className="mr-2" /> },
    { name: "Address & Billing", icon: <FaMapMarkerAlt className="mr-2" /> },
    { name: "Notifications", icon: <FaBell className="mr-2" /> },
  ];

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Order Header */}
      <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
        <div>
          <h3 className="text-lg font-semibold div-text">
            Customer ID #634759
          </h3>
          <p className="text-sm text-gray-500">Aug 17, 2020, 5:48 (ET)</p>
        </div>
        <button className="px-4 py-2 text-sm bg-red-100 dark:bg-red-300 text-red-600 rounded">
          Delete customer
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - User Profile & Premium */}
        <CustomerProfile />

        {/* Right Section */}
        <div className="col-span-2">
          {/* Top Navigation */}
          <div className="flex space-x-6 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center py-2 px-4 font-semibold rounded-lg transition duration-300 ${
                  activeTab === tab.name
                    ? "text-blue-600 bg-blue-100 "
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          {/* Right Side - Change Password */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 dark:bg-gray-800  dark:text-white">
            <div className="bg-white rounded-2xl  div-text div-dark border-dark">
              <h3 className="text-lg font-semibold">Change Password</h3>

              {/* Password Requirements Alert */}
              <div className="bg-orange-100 dark:bg-gray-600 text-orange-600 dark:text-orange-400 dark:bg-transparent p-4 rounded-lg mt-4">
                <p className="font-semibold">
                  Ensure that these requirements are met
                </p>
                <p className="text-sm">
                  Minimum 8 characters long, uppercase & symbol
                </p>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* New Password */}
                <div>
                  <label className="text-sm font-medium">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full border rounded-md px-3 py-2 mt-1 div-text div-dark border-dark"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-4 text-gray-500 "
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon size={18} />
                      ) : (
                        <EyeOffIcon size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-sm font-medium">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full border rounded-md px-3 py-2 mt-1 div-text div-dark border-dark"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-4 text-gray-500"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeIcon size={18} />
                      ) : (
                        <EyeOffIcon size={18} />
                      )}
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

export default ECommerceCustomerSecurity;
