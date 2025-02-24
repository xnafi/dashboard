// import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
// import { FaCcMastercard, FaCcVisa, FaCcAmex } from "react-icons/fa";

const UserPlans = () => {
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 div-text max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        {/* Left Side - User Details & Plan */}
        <div className="lg:col-span-1 space-y-6">
          {/* User Details */}
          <div className="bg-white rounded-2xl shadow-md p-6 div-dark div-text">
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <img
                src="https://i.postimg.cc/s2QQp8X9/Avatar.png"
                alt="User"
                className="w-20 h-20 rounded-full border-2 border-indigo-500"
              />
              <h2 className="text-lg font-semibold mt-2">Seth Hallam</h2>
              <span className="text-gray-500 bg-gray-200 div-dark div-text px-3 py-1 rounded-full text-sm mt-1">
                Author
              </span>
            </div>

            {/* Stats Section */}
            <div className="flex justify-between mt-4 text-center ">
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
            <div className="text-sm text-gray-700 div-text space-y-2">
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
              <button className="bg-red-400 bg-transparent text-red-700 font-bold px-4 py-2 rounded-md">
                Suspend
              </button>
            </div>
          </div>

          {/* Plan Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 div-dark div-text">
            {/* Plan Type and Price */}
            <div className="flex justify-between items-center">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm ">
                Standard
              </span>
              <p className="text-4xl font-bold text-indigo-500">
                $99 <span className="text-sm text-gray-500">/ month</span>
              </p>
            </div>

            {/* Plan Features */}
            <ul className="text-lg text-gray-700 div-text mt-3 space-y-1">
              <li>• 10 Users</li>
              <li>• Up to 10 GB Storage</li>
              <li>• Basic Support</li>
            </ul>

            {/* Days Remaining Section */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg text-gray-500 div-text">Days</p>
              <p className="text-lg text-gray-500 div-text">26 of 30 days</p>
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

        {/* Right Side - Current Plan */}
        <div className="lg:col-span-2">
          {/* Flex Container for Plan Details & Notification */}
          <div className="mb-6 rounded-2xl bg-white shadow-md p-6 div-dark div-text flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left: Plan Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 div-text">
                Current Plan
              </h3>
              <p className="text-gray-700 font-semibold div-text">
                Your Current Plan is Basic
              </p>
              <p className="text-gray-700 mb-4 div-text">A simple start for everyone</p>
              <p className="text-gray-700 font-semibold div-text">
                Active until Dec 09, 2021
              </p>
              <p className="text-gray-700 mb-4 div-text">
                We will send you a notification upon Subscription expiration
              </p>
              <p className="text-lg font-semibold mt-2 flex items-center gap-2 div-text">
                $99 Per Month{" "}
                <span className="text-xs bg-indigo-100  text-indigo-600 px-2 py-1 rounded-full dark:text-indigo-600 dark:bg-indigo-400">
                  Popular
                </span>
              </p>
              <p className="text-gray-500 text-sm div-text">
                Standard plan for small to medium businesses
              </p>
              {/* Buttons */}
              <div className="flex gap-4 mt-4 w-full">
                <button className="bg-indigo-600 text-white  px-2 py-2 rounded-md flex-1">
                  Upgrade Plan
                </button>
                <button className="bg-red-100 text-red-600 px-2 py-2 rounded-md flex-1">
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Right: Notification Box & Progress */}
            <div className="flex-1 mt-10">
              {/* Notification Box */}
              <div className="bg-orange-100 text-orange-600 p-4 rounded-lg flex items-center gap-2">
                <MdOutlineErrorOutline className="text-xl" />
                <p className="text-sm ">
                  We need your attention! Your plan requires updates
                </p>
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
                <p className="text-sm text-gray-500 mt-1 div-text">
                  Your plan requires update
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800 div-text">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                + Add Card
              </button>
            </div>

            {/* Payment Cards */}
            <div className="space-y-4 ">
              {/* Mastercard */}
              <div className="p-4 border border-dark rounded-lg flex justify-between items-center">
                <div className="gap-4">
                  <img
                    src="https://i.postimg.cc/1zy59Khk/mastercard-1.png"
                    alt="Mastercard"
                    className="w-12 h-8"
                  />
                  <div>
                    <p className="font-semibold mb-2 mt-2">
                      Tom McBride
                      <span className="text-xs bg-purple-200 text-indigo-700 px-2 py-1 rounded-md ml-2">
                        Popular
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 div-text">**** **** **** 9865</p>
                  </div>
                </div>
                <div className="text-right">
                  
                  <div className="flex gap-2 mt-2">
                    <button className="bg-purple-200 text-indigo-700 px-3 py-1 rounded-md">
                      Edit
                    </button>
                    <button className="bg-red-200 text-red-700 px-3 py-1 rounded-md">
                      Delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 div-text">Card expires at 12/24</p>
                </div>
              </div>

              {/* Visa */}
              <div className="p-4 border border-dark rounded-lg flex justify-between items-center">
                <div className=" gap-4">
                  <img
                    src="https://i.postimg.cc/vZs6Vfwz/visa-icon-1.png"
                    alt="Visa"
                    className="w-12 h-8"
                  />
                  <div>
                    <p className="font-semibold mb-2 mt-2">Mildred Wagner</p>
                    <p className="text-sm text-gray-500 div-text">**** **** **** 5678</p>
                  </div>
                </div>
                <div className="text-right">
                  
                  <div className="flex gap-2 mt-2">
                    <button className="bg-purple-200 text-indigo-700 px-3 py-1 rounded-md">
                      Edit
                    </button>
                    <button className="bg-red-200 text-red-700 px-3 py-1 rounded-md">
                      Delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 div-text">Card expires at 02/24</p>
                </div>
              </div>

              {/* American Express - Expired */}
              <div className="p-4 border border-dark rounded-lg flex justify-between items-center">
                <div className=" gap-4">
                  <img
                    src="https://i.postimg.cc/tgr1wcZS/american-express.png"
                    alt="American Express"
                    className="w-12 h-8"
                  />
                  <div>
                    <p className="font-semibold mb-2 mt-2">
                      Lester Jennings
                      <span className="text-xs bg-red-200 text-red-700 px-2 py-1 rounded-md ml-2 ">
                        Expired
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 div-text">**** **** **** 9424</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-2 mt-2">
                    <button className="bg-purple-200 text-indigo-700 px-3 py-1 rounded-md">
                      Edit
                    </button>
                    <button className="bg-red-200 text-red-700 px-3 py-1 rounded-md">
                      Delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 div-text">Card expires at 08/20</p>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Address Section */}
          <div className=" bg-white rounded-2xl shadow-md p-6 div-dark div-text mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Billing Address</h3>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                + Edit Address
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 div-text">
              <div>
                <p>
                  <strong>Company Name:</strong> <span className="ml-2">Kelly Group</span> 
                </p>
                <p>
                  <strong>Billing Email:</strong><span className="ml-8"> gertrude@gmail.com</span> 
                </p>
                <p>
                  <strong>Tax ID:</strong> <span className="ml-16 pl-2">TAX-875623</span> 
                </p>
                <p>
                  <strong>VAT Number:</strong> <span className="ml-8">SDF754K77</span> 
                </p>
                <p>
                  <strong>Billing Address:</strong> <span className="ml-4">100 Water Plant Avenue</span> 
                
                </p>
              </div>

              <div className="">
                <p>
                  <strong>Contact:</strong>    <span className="ml-8">+1 (609) 933-44-22</span> 
                </p>
                <p>
                  <strong>Country:</strong> <span className="ml-8">USA </span> 
                </p>
                <p>
                  <strong>State:</strong>  <span className="ml-12 pl-2">Capholim</span> 
                </p>
                <p>
                  <strong>Zip Code:</strong><span className="ml-8">403114</span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPlans;
