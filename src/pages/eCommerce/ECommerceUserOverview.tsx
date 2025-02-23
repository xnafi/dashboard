import {
  FaEdit,
  FaStar,
  FaGift,
  FaDollarSign,
  FaShoppingCart,
  FaUser,
  FaLock,
  FaMapMarkerAlt,
  FaBell,
  FaCrown,
  FaSearch,
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const ECommerceUserOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = [
    { name: "Overview", icon: <FaUser className="mr-2" /> },
    { name: "Security", icon: <FaLock className="mr-2" /> },
    { name: "Address & Billing", icon: <FaMapMarkerAlt className="mr-2" /> },
    { name: "Notifications", icon: <FaBell className="mr-2" /> },
  ];

  const cards = [
    {
      title: "Account Balance",
      icon: <FaDollarSign className="text-purple-500 text-xl" />,
      bgColor: "bg-purple-100",
      amount: "$7480",
      label: "Credit Left",
      description: "Account balance for next purchase",
      textColor: "text-purple-500",
    },
    {
      title: "Loyalty Program",
      icon: <FaGift className="text-green-500 text-xl" />,
      bgColor: "bg-green-100",
      amount: "Platinum Member",
      label: "",
      description: "3000 points to next tier",
      textColor: "text-green-500",
    },
    {
      title: "Wishlist",
      icon: <FaStar className="text-orange-400 text-xl" />,
      bgColor: "bg-orange-100",
      amount: "15",
      label: "Items in wishlist",
      description: "Receive notification when items go on sale",
      textColor: "text-orange-500",
    },
    {
      title: "Coupons",
      icon: <FaCrown className="text-blue-500 text-xl" />,
      bgColor: "bg-blue-100",
      amount: "21",
      label: "Coupons you win",
      description: "Use coupon on next purchase",
      textColor: "text-blue-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Order Header */}
      <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
        <div>
          <h3 className="text-lg font-semibold div-text">Customer ID #634759</h3>
          <p className="text-sm text-gray-500 div-text">Aug 17, 2020, 5:48 (ET)</p>
        </div>
        <button className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded">
          Delete customer
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - User Profile & Premium */}
        <div>
          {/* User Profile */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 div-dark div-text">
            <div className="flex flex-col items-center">
              <img
                src="https://i.postimg.cc/Tw4rMhxh/Avatar.png"
                alt="User"
                className="w-24 h-24"
              />
              <h2 className="text-xl font-semibold mt-2 text-gray-600">
                Seth Hallam
              </h2>
              <p className="text-gray-500 text-sm">Customer ID #634759</p>
            </div>

            {/* Orders & Spent Section */}
            <div className="flex justify-between my-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100  dark:bg-indigo-300 p-2  flex items-center justify-center">
                  <FaShoppingCart className="text-indigo-500  text-xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-600">184</p>
                  <p className="text-gray-500 text-sm">Orders</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 dark:bg-indigo-300 p-2  flex items-center justify-center">
                  <FaDollarSign className="text-indigo-500 text-xl" />
                </div>

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
                <span className="bg-green-100 text-green-600 dark:bg-green-300 px-2 py-1 rounded-lg text-xs font-medium">
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
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center py-2 px-4 font-semibold rounded-lg transition duration-300 ${
                  activeTab === tab.name
                    ? "text-indigo-600 bg-blue-100"
                    : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="bg-white div-dark div-text rounded-xl shadow-lg p-4">
                <div className="flex flex-col">
                  <div
                    className={`p-2 w-10 h-10 mb-2 rounded-lg flex items-center dark:bg-indigo-300 justify-center ${card.bgColor}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    {card.title}
                  </h3>
                  <p className={`text-xl font-semibold mt-2 ${card.textColor}`}>
                    {card.amount}{" "}
                    <span className="text-gray-600 text-base">
                      {card.label}
                    </span>
                  </p>
                  {card.description && (
                    <p className="text-gray-500 text-sm mt-1">
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-lg p-4 mt-6 div-dark div-text">
            <div className="flex justify-between items-center space-x-4">
              <h3 className="text-lg font-semibold text-gray-600">
                Orders Placed
              </h3>
              <div className="relative ">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm ml-32 div-text" />
                <input
                  type="text"
                  placeholder="Search Orders"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm input-field "
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm mt-8">
                <thead className="text-gray-500">
                  <tr className="border-b border-dark">
                    <th className="p-2">ORDER</th>
                    <th className="p-2">DATE</th>
                    <th className="p-2">STATUS</th>
                    <th className="p-2">SPENT</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <tr key={index} className="border-b border-dark">
                      <td className="p-2">#{4910 + index}</td>
                      <td className="p-2">Aug 17, 2020</td>
                      <td className="p-2 text-green-600 font-semibold">
                        Ready to Pickup
                      </td>
                      <td className="p-2">$256.39</td>
                      <td className="p-3">
                        <button className="text-gray-500 hover:text-gray-700">
                          •••
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="p-2"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                <FiChevronLeft />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`p-2 ${
                    currentPage === i + 1
                      ? "text-white bg-indigo-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="p-2"
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceUserOverview;
