import { FaEdit, FaUserSlash, FaArrowUp } from "react-icons/fa";

const UserDetails = () => {
  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <div className="div-dark div-text rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.postimg.cc/s2QQp8X9/Avatar.png"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
          />
          <h2 className="text-xl font-semibold mt-3 text-gray-900 div-text">
            Seth Hallam
          </h2>
          <span className="text-gray-600 bg-gray-200 dark:bg-gray-700 div-text px-4 py-1 rounded-full text-sm mt-1">
            Author
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div className="flex flex-col items-center">
            <img
              src="https://i.postimg.cc/63VmpMdt/Icon-2.png"
              alt="Task Done Icon"
              className="w-10 h-10"
            />
            <p className="text-lg font-bold text-gray-900 div-text">
              1.23k
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Task Done
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://i.postimg.cc/dQBfMSs9/Icon-3.png"
              alt="Project Done Icon"
              className="w-10 h-10"
            />
            <p className="text-lg font-bold text-gray-900 div-text">
              568
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Project Done
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-4 text-sm text-gray-800 div-text space-y-2">
          <p>
            <strong>Username:</strong> @shallamb
          </p>
          <p>
            <strong>Billing Email:</strong> shallamb@gmail.com
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="text-green-500 font-semibold">Active</span>
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

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md">
            <FaEdit /> Edit
          </button>
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md">
            <FaUserSlash /> Suspend
          </button>
        </div>
      </div>

      {/* Subscription Plan */}
      <div className="div-dark div-text rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Standard
          </span>
          <p className="text-3xl font-bold text-indigo-500">
            $99 <span className="text-sm text-gray-500">/ month</span>
          </p>
        </div>

        {/* Features */}
        <ul className="text-gray-700 div-text mt-3 space-y-2">
          <li>• 10 Users</li>
          <li>• Up to 10 GB Storage</li>
          <li>• Basic Support</li>
        </ul>

        {/* Progress */}
        <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-400">
          <p>Days</p>
          <p>26 of 30 days</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div className="bg-indigo-500 h-2 rounded-full w-11/12"></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">4 days remaining</p>

        {/* Upgrade Button */}
        <button className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md w-full">
          <FaArrowUp /> Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
