import { useState } from "react";
import {
  FaStore,
  FaCreditCard,
  
} from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

const ECommerceStoreDetails = () => {
  const [activeTab, setActiveTab] = useState("Store Details");

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
      <div className="flex  bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64   p-6">
          <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                                ${
                                  activeTab === item.name
                                    ? "bg-indigo-600"
                                    : "hover:bg-indigo-500"
                                }`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.icon} <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="space-y-6">
            {/* Profile Section */}
            <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg border-dark div-dark div-text ">
              <h3 className="text-lg font-semibold mb-4">Profile</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+(123) 456-7890"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Store contact email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Sender email
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-300 rounded-lg text-orange-800 text-sm">
                ⚠️ Confirm that you have access to johndoe@gmail.com in sender
                email settings.
              </div>
            </section>

            {/* Billing Information */}
            <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 div-text">
                Billing information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Legal business name
                  </label>
                  <input
                    type="text"
                    placeholder="Business name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Country/region
                  </label>
                  <select className="input-field">
                    <option>United States</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-gray-600 div-text">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc."
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                    className="input-field"
                  />
                </div>
              </div>
            </section>

            {/* Time Zone & Units */}
            <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 div-text">
                Time zone and units of measurement
              </h3>
              <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
                Used to calculate product prices, shipping weights, and order
                times.
              </p>
              <div className="">
                <div>
                  <label className="text-sm text-gray-600  div-text">
                    Time zone
                  </label>
                  <select className="input-field">
                    <option>(GMT-12:00) International Date Line West</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 div-text">
                      Unit system
                    </label>
                    <select className="input-field w-full">
                      <option>Metric</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 div-text">
                      Default weight unit
                    </label>
                    <select className="input-field w-full">
                      <option>Kilograms</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Store Currency */}
            <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 div-text">Store currency</h3>
              <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
                The currency your products are sold in.
              </p>
              <div>
                <label className="text-sm text-gray-600 div-text">
                  Store currency
                </label>
                <select className="input-field w-full">
                  <option>Select currency</option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                  <option>INR - Indian Rupee</option>
                  <option>JPY - Japanese Yen</option>
                </select>
              </div>
            </section>

            {/* Order ID Format */}
            <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-1 div-text">Order id format</h3>
              <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">
                Shown on the Orders page, customer pages, and customer order
                notifications to identify orders.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Prefix
                  </label>
                  <input type="text" placeholder="#" className="input-field" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 div-text">
                    Suffix
                  </label>
                  <input
                    type="text"
                    placeholder="Suffix"
                    className="input-field"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Your order ID will appear as #1001, #1002, #1003...
              </p>
            </section>

            {/* Save Changes Button */}
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg mr-3 cursor-not-allowed">
                Discard
              </button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceStoreDetails;
