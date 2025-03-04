import { MdOutlineErrorOutline } from "react-icons/md";

const CurrentPlan = () => {
  return (
    <div className="mb-6 rounded-2xl bg-white shadow-md p-6 div-dark div-text flex flex-col lg:flex-row justify-between items-start gap-6">
      {/* Left: Plan Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 div-text">
          Current Plan
        </h3>
        <p className="text-gray-700 font-semibold div-text">
          Your Current Plan is Basic
        </p>
        <p className="text-gray-700 mb-4 div-text">
          A simple start for everyone
        </p>
        <p className="text-gray-700 font-semibold div-text">
          Active until Dec 09, 2021
        </p>
        <p className="text-gray-700 mb-4 div-text">
          We will send you a notification upon Subscription expiration
        </p>
        <p className="text-lg font-semibold mt-2 flex items-center gap-2 div-text">
          $99 Per Month{" "}
          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full dark:text-indigo-600 dark:bg-indigo-400">
            Popular
          </span>
        </p>
        <p className="text-gray-500 text-sm div-text">
          Standard plan for small to medium businesses
        </p>
        {/* Buttons */}
        <div className="flex gap-4 mt-4 w-full">
          <button className="bg-indigo-600 text-white px-2 py-2 rounded-md flex-1">
            Upgrade Plan
          </button>
          <button className="bg-red-100 text-red-600 px-2 py-2 rounded-md flex-1">
            Cancel Subscription
          </button>
        </div>
      </div>

      {/* Right: Notification Box & Progress */}
      <div className="flex-1 mt-10">
        <div className="bg-orange-100 text-orange-600 p-4 rounded-lg flex items-center gap-2">
          <MdOutlineErrorOutline className="text-xl" />
          <p className="text-sm">We need your attention! Your plan requires updates</p>
        </div>

        {/* Days Progress */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 div-text">Days</p>
            <p className="text-gray-500 div-text">26 of 30 Days</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-indigo-500 h-2 rounded-full w-11/12"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1 div-text">Your plan requires update</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
