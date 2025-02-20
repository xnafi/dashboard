import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";

const ECommerceCheckOut = () => {
  const [activeTab, setActiveTab] = useState("Checkout");

  const menuItems = [
    { name: "Store Details", icon: <FaStore /> },
    { name: "Payment", icon: <MdOutlinePayments /> },
    { name: "Checkout", icon: <FaCreditCard /> },
    { name: "Shipping & Delivery", icon: <MdOutlineLocalShipping /> },
    { name: "Locations", icon: <MdLocationOn /> },
    { name: "Notifications", icon: <MdNotificationsNone /> },
  ];

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 max-w-full rounded-lg shadow-2xl">
      <div className="flex  dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 p-6   rounded-lg">
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

        {/* Right Section */}
        <div className="flex-1 p-6">
          {activeTab === "Checkout" && (
            <div >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-dark div-dark div-text">
              <h3 className="text-lg font-semibold mb-1">Customer contact method</h3>
              <p className="text-gray-500 mb-4">Select what contact method customers use to check out.</p>

              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input type="radio" name="contact" className="text-indigo-600" defaultChecked />
                  <span>Phone number</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="contact" className="text-indigo-600" />
                  <span>Email</span>
                </label>
                <div className="bg-blue-100 text-blue-700 p-4 rounded-lg mt-4">
                <p>📢 To send SMS updates, you need to install an SMS App.</p>
              </div>
                </div>
              </div>

             
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4 border-dark div-dark div-text">
              <h3 className="text-lg font-semibold mt-6 mb-4">Customer information</h3>

              <div className="space-y-4">
                <fieldset>
                  <legend className="font-medium">Full name</legend>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="fullname" className="text-indigo-600" defaultChecked />
                    <span>Phone number</span>
                  </label>
                  <label className="flex items-center gap-3 ">
                    <input type="radio" name="fullname" className="text-indigo-600" />
                    <span>Require first and last name</span>
                  </label>
                </fieldset>

                <fieldset>
                  <legend className="font-medium">Company name</legend>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="company" className="text-indigo-600" defaultChecked />
                    <span>Don’t include</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="company" className="text-indigo-600" />
                    <span>Optional</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="company" className="text-indigo-600" />
                    <span>Required</span>
                  </label>
                </fieldset>

                <fieldset>
                  <legend className="font-medium">Address line 2 (apartment, unit, etc.)</legend>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="address2" className="text-indigo-600" defaultChecked />
                    <span>Don’t include</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="address2" className="text-indigo-600" />
                    <span>Optional</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="address2" className="text-indigo-600" />
                    <span>Required</span>
                  </label>
                </fieldset>

                <fieldset>
                  <legend className="font-medium">Shipping address phone number</legend>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="shippingPhone" className="text-indigo-600" defaultChecked />
                    <span>Don’t include</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="shippingPhone" className="text-indigo-600" />
                    <span>Optional</span>
                  </label>
                  <label className="flex items-center gap-3 mb-1">
                    <input type="radio" name="shippingPhone" className="text-indigo-600" />
                    <span>Required</span>
                  </label>
                </fieldset>
              </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end mt-6 space-x-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg div-text div-dark">Discard</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ECommerceCheckOut;
