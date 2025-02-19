import { useState } from "react";
import { FaStore, FaCreditCard, FaClock, FaDollarSign, FaFileInvoice } from "react-icons/fa";
import { MdOutlinePayments, MdOutlineLocalShipping, MdLocationOn, MdNotificationsNone } from "react-icons/md";

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
                                ${activeTab === item.name ? "bg-indigo-600" : "hover:bg-indigo-300"}`}
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
                    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Profile</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Store Name" className="input-field" />
                            <input type="text" placeholder="Phone" className="input-field" />
                            <input type="email" placeholder="Store contact email" className="input-field" />
                            <input type="email" placeholder="Sender email" className="input-field" />
                        </div>
                        <div className="mt-4 p-3 bg-orange-100 dark:bg-orange-200 rounded-lg text-orange-800 text-sm">
                            ⚠️ Confirm that you have access to johndoe@gmail.com in sender email settings.
                        </div>
                    </section>

                    {/* Billing Information */}
                    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Billing information</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Business name" className="input-field" />
                            <select className="input-field">
                                <option>United States</option>
                            </select>
                            <input type="text" placeholder="Address" className="input-field col-span-2" />
                            <input type="text" placeholder="City" className="input-field" />
                            <input type="text" placeholder="State" className="input-field" />
                            <input type="text" placeholder="PIN Code" className="input-field" />
                        </div>
                    </section>

                    {/* Time Zone & Units */}
                    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Time zone and units of measurement</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <select className="input-field">
                                <option>(GMT-12:00) International Date Line West</option>
                            </select>
                            <select className="input-field">
                                <option>Metric</option>
                            </select>
                            <select className="input-field">
                                <option>Kilograms</option>
                            </select>
                        </div>
                    </section>

                    {/* Store Currency */}
                    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Store currency</h3>
                        <input type="text" placeholder="Store currency" className="input-field w-full" />
                    </section>

                    {/* Order ID Format */}
                    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Order id format</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Prefix" className="input-field" />
                            <input type="text" placeholder="Suffix" className="input-field" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Your order ID will appear as #1001, #1002, #1003...
                        </p>
                    </section>

                    {/* Save Changes Button */}
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg mr-3 cursor-not-allowed">Cancel</button>
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ECommerceStoreDetails;
