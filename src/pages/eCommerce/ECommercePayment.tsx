import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

const ECommercePayment = () => {
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
                                    : "hover:bg-indigo-300"
                                }`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.icon} <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side Content */}
        <div className="flex-1 p-6">
          {activeTab === "Payment" && (
            <div className="space-y-6">
              {/* Payment Providers */}
              <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-1">
                  Payment providers
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  Providers that enable you to accept payment methods at a rate
                  set by the third-party. An additional fee will apply to new
                  orders once you select a plan.
                </p>
                <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg">
                  Choose A Provider
                </button>
              </section>

              {/* Supported Payment Methods */}
              <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                {/* Header */}
                <h3 className="text-lg font-semibold mb-1">
                  Supported payment methods
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  Payment methods that are available with one of Vuexy's
                  approved payment providers.
                </p>

                {/* Default Label */}
                <p className="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Default
                </p>

                {/* Payment Card */}
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg flex justify-between items-center">
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <img
                          src="https://i.ibb.co.com/spFk4S6R/Logo.jpg"
                          alt="PayPal"
                          className="h-10"
                        />
                      </div>
                      <button className="text-indigo-600 font-medium">
                        Activate PayPal
                      </button>
                    </div>
                    <div className="flex gap-44 mt-8">
                      <div>
                        <p className="text-gray-500 text-sm">Provider</p>
                        <p className="font-medium">PayPal</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Status</p>
                        <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-sm">
                          Inactive
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Transaction Fee</p>
                        <p className="font-medium">2.99%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Payment Methods Button */}
                <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg mt-4">
                  Add Payment Methods
                </button>
              </section>

              {/* Manual Payment Methods */}
              <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-1">
                  Manual payment methods
                </h3>
                <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                  Payments that are made outside your online store. When a
                  customer selects a manual payment method such as cash on
                  delivery, you'll need to approve their order before it can be
                  fulfilled.
                </p>
                <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg">
                  Add Manual Payment Method <span className="ml-2">▼</span>
                </button>
              </section>

              {/* Save & Discard Buttons */}
              <div className="flex justify-end gap-4">
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">
                  Discard
                </button>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ECommercePayment;
