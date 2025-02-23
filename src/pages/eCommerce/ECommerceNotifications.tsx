import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

type NotificationCategory = "customer" | "orders" | "shipping";
type NotificationType = Record<string, { email: boolean; app: boolean }>;

const ECommerceNotifications = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  const [notifications, setNotifications] = useState<{
    customer: NotificationType;
    orders: NotificationType;
    shipping: NotificationType;
  }>({
    customer: {
      "New customer sign up": { email: true, app: false },
      "Customer account password reset": { email: false, app: true },
      "Customer account invite": { email: false, app: false },
    },
    orders: {
      "Order purchase": { email: true, app: false },
      "Order cancelled": { email: false, app: false },
      "Order refund request": { email: false, app: false },
      "Order confirmation": { email: false, app: false },
      "Payment error": { email: false, app: true },
    },
    shipping: {
      "Picked up": { email: true, app: false },
      "Shipping update": { email: false, app: true },
      "Delivered": { email: false, app: false },
    },
  });

  const menuItems = [
    { name: "Store Details", icon: <FaStore /> },
    { name: "Payment", icon: <MdOutlinePayments /> },
    { name: "Checkout", icon: <FaCreditCard /> },
    { name: "Shipping & Delivery", icon: <MdOutlineLocalShipping /> },
    { name: "Locations", icon: <MdLocationOn /> },
    { name: "Notifications", icon: <MdNotificationsNone /> },
  ];

  const handleCheckboxChange = (
    category: NotificationCategory,
    type: string,
    channel: "email" | "app"
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: {
          ...prev[category][type],
          [channel]: !prev[category][type][channel],
        },
      },
    }));
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 max-w-full rounded-lg shadow-2xl">
      <div className="flex bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 p-6">
          <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
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
        {activeTab === "Notifications" && (
          <div className="flex-1 p-6">
            {Object.entries(notifications).map(([category, types]) => (
              <div
                key={category}
                className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold mb-3 capitalize">
                  {category}
                </h3>
                <div className="border rounded-lg">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-700 font-semibold">
                    <span>TYPE</span>
                    <span className="text-center">EMAIL</span>
                    <span className="text-center">APP</span>
                  </div>
                  {Object.entries(types as NotificationType).map(
                    ([type, channels]) => (
                      <div
                        key={type}
                        className="grid grid-cols-3 gap-4 p-4 border-t"
                      >
                        <span>{type}</span>
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            checked={channels.email}
                            onChange={() =>
                              handleCheckboxChange(
                                category as NotificationCategory,
                                type,
                                "email"
                              )
                            }
                            className="form-checkbox text-indigo-600 focus:ring-indigo-500 h-5 w-5"
                          />
                        </div>
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            checked={channels.app}
                            onChange={() =>
                              handleCheckboxChange(
                                category as NotificationCategory,
                                type,
                                "app"
                              )
                            }
                            className="form-checkbox text-indigo-600 focus:ring-indigo-500 h-5 w-5"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Save & Discard Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">
                Discard
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ECommerceNotifications;
