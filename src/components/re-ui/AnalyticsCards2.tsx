// AnalyticsCards.tsx
import { FiUsers, FiUserPlus, FiUserCheck, FiUserMinus } from "react-icons/fi";

const AnalyticsCards2 = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Session Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 border-dark">
        <div>
          <p className="text-sm text-gray-500 div-text">Session</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            21,459 <span className="text-green-500 text-sm">(+29%)</span>
          </p>
          <p className="text-xs text-gray-400">Total Users</p>
        </div>
        <div className="bg-purple-100 p-2 rounded-lg">
          <FiUsers className="text-purple-600 text-2xl" />
        </div>
      </div>
      
      {/* Paid Users Card */}
      <div className="bg-white border-dark div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200">
        <div>
          <p className="text-sm text-gray-500 div-text">Paid Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            4,567 <span className="text-green-500 text-sm">(+18%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-red-100 p-2 rounded-lg">
          <FiUserPlus className="text-red-500 text-2xl" />
        </div>
      </div>

      {/* Active Users Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-sm text-gray-500 div-text">Active Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            19,860 <span className="text-red-500 text-sm">(-14%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-green-100 p-2 rounded-lg">
          <FiUserCheck className="text-green-500 text-2xl" />
        </div>
      </div>

      {/* Pending Users Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-sm text-gray-500 div-text">Pending Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            237 <span className="text-green-500 text-sm">(+42%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-orange-100 p-2 rounded-lg">
          <FiUserMinus className="text-orange-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCards2;
