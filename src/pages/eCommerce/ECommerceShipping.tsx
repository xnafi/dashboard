import { useState } from "react";
import { FaStore, FaCreditCard } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineLocalShipping,
  MdLocationOn,
  MdNotificationsNone,
} from "react-icons/md";
import { FiEdit, FiTrash } from "react-icons/fi";

const ECommerceShipping = () => {
  const [activeTab, setActiveTab] = useState("Shipping & Delivery");

  const menuItems = [
    { name: "Store Details", icon: <FaStore /> },
    { name: "Payment", icon: <MdOutlinePayments /> },
    { name: "Checkout", icon: <FaCreditCard /> },
    { name: "Shipping & Delivery", icon: <MdOutlineLocalShipping /> },
    { name: "Locations", icon: <MdLocationOn /> },
    { name: "Notifications", icon: <MdNotificationsNone /> },
  ];

  const shippingZones = [
    {
      name: "Domestic",
      country: "United States of America",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual avatar URL
      rates: [
        { rateName: "Weight", condition: "5kg-10kg", price: "$9" },
        { rateName: "VAT", condition: "12%", price: "$25" },
        { rateName: "Duty", condition: "-", price: "-" },
      ],
    },
    {
      name: "International",
      country: "United States of America",
      avatar: "https://i.postimg.cc/153vgP3z/united-states-flag.jpg", // Replace with actual avatar URL
      rates: [
        { rateName: "Weight", condition: "5kg-10kg", price: "$19" },
        { rateName: "VAT", condition: "12%", price: "$25" },
        { rateName: "Duty", condition: "Japan", price: "$49" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 max-w-full rounded-lg shadow-2xl">
      <div className="flex  dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 p-6 dark:bg-gray-800 rounded-lg ">
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
        <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div>
            <div className="flex items-center justify-between mb-1">
              <div>
                <h2 className="text-lg font-semibold mb-2">Shipping zones</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose where you ship and how much you charge for shipping at checkout.
                </p>
              </div>
              <div>
                <button className="text-indigo-500 font-medium">Create zone</button>
              </div>
            </div>

            {shippingZones.map((zone, index) => (
              <div key={index} className="mb-8 p-4  rounded-lg dark:bg-gray-900 mt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <img src={zone.avatar} alt={zone.name} className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">{zone.name}</span>
                      <span className="text-gray-500">{zone.country}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-600 hover:text-indigo-600">
                      <FiEdit size={18} />
                    </button>
                    <button className="p-1 text-gray-600 hover:text-red-800">
                      <FiTrash size={18} />
                    </button>
                  </div>
                </div>

                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="text-left text-gray-600 dark:text-gray-300">
                      <th className="p-2">Rate Name</th>
                      <th className="p-2">Condition</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zone.rates.map((rate, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2">{rate.rateName}</td>
                        <td className="p-2">{rate.condition}</td>
                        <td className="p-2">{rate.price}</td>
                        <td className="p-2 flex gap-2">
                          <button className="p-1 text-gray-600 hover:text-indigo-600">
                            <FiEdit size={18} />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-red-800">
                            <FiTrash size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="mt-3 text-indigo-600 hover:underline bg-indigo-100 p-2">Add Rate</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-2">Discard</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Save Changes</button>
      </div>
    </div>
  );
};

export default ECommerceShipping;
