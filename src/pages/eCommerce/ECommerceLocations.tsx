import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

const ECommerceLocations = () => {
  const [activeTab, setActiveTab] = useState("Locations");

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
      <div className="flex dark:bg-gray-900 bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 p-6   border-gray-200 dark:border-gray-700 ">
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
        <div className="flex-1 p-6">
          {activeTab === "Locations" && (
            <div className="">
              <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 mb-6 border-dark div-dark div-text">
                {/* Location Name */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-6">Location Name</h3>
                  <p>Location Name</p>
                  <input
                    type="text"
                    value="Shop location"
                    disabled
                    className="w-full p-3 border border-gray-300 rounded-lg input-field"
                  />
                  <div className=" flex items-center mt-6 mb-6">
                    <input
                      type="checkbox"
                      checked
                      className="w-5 h-5 mr-2 text-indigo-600"
                    />
                    <label>Fulfill online orders from this location</label>
                  </div>
                  <div className="mt-3 p-4 bg-indigo-100 text-blue-700 rounded-md dark:bg-indigo-400">
                    <p>
                      This is your default location. To change whether you
                      fulfill online orders from this location, select another
                      default location first.
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 border-dark div-dark div-text">
                <h3 className="text-lg font-semibold mb-3">Address</h3>

                <div>
                  <label className="block mb-1 text-sm">Country/Region</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg input-field">
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <label className="block mb-1 text-sm">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full p-3 border border-gray-300 rounded-lg input-field "
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm border-dark div-dark div-text">
                      Apartment, suite, etc.
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc."
                      className="w-full p-3 border border-gray-300 rounded-lg input-field dark:text-g"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full p-3 border border-gray-300 rounded-lg input-field"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full p-3 border border-gray-300 rounded-lg input-field"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full p-3 border border-gray-300 rounded-lg input-field"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">PIN Code</label>
                    <input
                      type="text"
                      placeholder="PIN Code"
                      className="w-full p-3 border border-gray-300 rounded-lg input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-end space-x-4">
                <button className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400  dark:hover:bg-gray-600 div-text div-dark">
                  Discard
                </button>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
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

export default ECommerceLocations;
