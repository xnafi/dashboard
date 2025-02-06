import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const UserSecurity = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-gray-900  dark:text-gray-200">
      {/* Left Side - User Details & Plan */}
      <div className="lg:col-span-1 space-y-6">
        {/* User Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800  dark:text-white">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src="https://i.postimg.cc/s2QQp8X9/Avatar.png"
              alt="User"
              className="w-20 h-20 rounded-full border-2 border-indigo-500"
            />
            <h2 className="text-lg font-semibold mt-2">Seth Hallam</h2>
            <span className="text-gray-500 bg-gray-200 dark:bg-gray-500  dark:text-white px-3 py-1 rounded-full text-sm mt-1">
              Author
            </span>
          </div>

          {/* Stats Section */}
          <div className="flex justify-between mt-4 text-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.postimg.cc/63VmpMdt/Icon-2.png"
                alt="Task Done Icon"
                className="w-12 h-12"
              />
              <div>
                <p className="text-xl font-bold">1.23k</p>
                <p className="text-sm text-gray-500">Task Done</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://i.postimg.cc/dQBfMSs9/Icon-3.png"
                alt="Project Done Icon"
                className="w-12 h-12"
              />
              <div>
                <p className="text-xl font-bold">568</p>
                <p className="text-sm text-gray-500">Project Done</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4 dark:border-gray-500" />

          {/* Details Section */}
          <h3 className="text-md font-semibold mb-2">Details</h3>
          <div className="text-sm text-gray-700 dark:text-white space-y-2">
            <p>
              <strong>Username:</strong> @shallamb
            </p>
            <p>
              <strong>Billing Email:</strong> shallamb@gmail.com
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-green-500">Active</span>
            </p>
            <p>
              <strong>Role:</strong> Subscriber
            </p>
            <p>
              <strong>Tax ID:</strong> Tax-8894
            </p>
            <p>
              <strong>Contact:</strong> +1 (234) 464-0600
            </p>
            <p>
              <strong>Language:</strong> English
            </p>
            <p>
              <strong>Country:</strong> Peru
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Edit
            </button>
            <button className="bg-red-500 bg-transparent text-red-700 font-bold px-4 py-2 rounded-md">
              Suspend
            </button>
          </div>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800  dark:text-white">
          {/* Plan Type and Price */}
          <div className="flex justify-between items-center">
            <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">
              Standard
            </span>
            <p className="text-4xl font-bold text-indigo-500">
              $99 <span className="text-sm text-gray-500">/ month</span>
            </p>
          </div>

          {/* Plan Features */}
          <ul className="text-lg text-gray-700 mt-3 space-y-1 dark:text-white">
            <li>• 10 Users</li>
            <li>• Up to 10 GB Storage</li>
            <li>• Basic Support</li>
          </ul>

          {/* Days Remaining Section */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg text-gray-500 dark:text-white">Days</p>
            <p className="text-lg text-gray-500 dark:text-white">26 of 30 days</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-indigo-500 h-2 rounded-full w-11/12"></div>
          </div>

          {/* Remaining Days Text */}
          <p className="text-sm text-gray-500 mt-1">4 days remaining</p>

          {/* Upgrade Button */}
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md w-full">
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* Right Side - Change Password */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800  dark:text-white">
        <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800  dark:text-white">
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
  );
};

export default UserSecurity;
