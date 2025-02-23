import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

const ECommerceNotifications = () => {
  const [activeTab, setActiveTab] = useState("Payment");

  const menuItems = [
    { name: "Store Details", icon: <FaStore /> },
    { name: "Payment", icon: <MdOutlinePayments /> },
    { name: "Checkout", icon: <FaCreditCard /> },
    { name: "Shipping & Delivery", icon: <MdOutlineLocalShipping /> },
    { name: "Locations", icon: <MdLocationOn /> },
    { name: "Notifications", icon: <MdNotificationsNone /> },
  ];

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 div-dark max-w-full rounded-lg shadow-2xl">
      <div className="flex bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 p-6">
          <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                                ${
                                  activeTab === item.name
                                    ? "bg-indigo-600 text-white"
                                    : "hover:bg-indigo-300 dark:hover:bg-indigo-500 dark:hover:text-gray-300"
                                }`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.icon} <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side Content */}
        
      </div>
    </div>
  );
};

export default ECommerceNotifications ;
