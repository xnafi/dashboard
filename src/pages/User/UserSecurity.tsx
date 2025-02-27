import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import UserDetails from "../../components/re-ui/UserDetails";

const UserSecurity = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-gray-900  dark:text-gray-200">
      {/* Left Side - User Details & Plan */}
      <div className="lg:col-span-1">
          {/* User Details */}
          <UserDetails />
        </div>

      {/* Right Side - Change Password */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 div-dark div-text">
        <div className="bg-white rounded-2xl shadow-md p-6 div-dark div-text">
          <h3 className="text-lg font-semibold">Change Password</h3>

          {/* Password Requirements Alert */}
          <div className="bg-orange-100 dark:bg-orange-100 text-orange-600 dark:text-orange-400  p-4 rounded-lg mt-4">
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
                  className="w-full border rounded-md px-3 py-2 mt-1 div-dark div-text border-dark"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-4 text-gray-500 "
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
                  className="w-full border rounded-md px-3 py-2 mt-1 border-dark div-dark div-text"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-4 text-gray-500"
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
