import {
  FaEdit,
  FaUser,
  FaLock,
  FaMapMarkerAlt,
  FaBell,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import { useState } from "react";
import CustomerProfile from "../../components/re-ui/CustomerProfile";

const ECommerceCustomerAddress = () => {
  const [activeTab, setActiveTab] = useState("Address & Billing");
  const tabs = [
    { name: "Overview", icon: <FaUser className="mr-2" /> },
    { name: "Security", icon: <FaLock className="mr-2" /> },
    { name: "Address & Billing", icon: <FaMapMarkerAlt className="mr-2" /> },
    { name: "Notifications", icon: <FaBell className="mr-2" /> },
  ];
  const [addresses] = useState([
    {
      id: 1,
      type: "Home",

      details: "23 Shatinon Mekalan",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      details: "45 Roker Terrace",
      contactName: "Violet Mendoza",
      contactName1: "Latheronwheel",
      contactName2: "KW5 8NW",
      contactName3: "London UK",
    },
    {
      id: 3,
      type: "Family",
      details: "512 Water Plant",
    },
  ]);

  const [paymentMethods] = useState([
    {
      id: 1,
      type: "Mastercard",
      details: "Expires Apr 2028",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    },
    {
      id: 2,
      type: "American Express",
      details: "**** 4487 - Expires 08/2028",
      icon: "https://i.postimg.cc/MGH6rJ0K/American-Express-logo-700x394.png",
      isDefault: true,
      owner: "Violet Mendoza",
      issuer: "VICBANK",
      billingCountry: "USA",
      phone: "+7634 983 637",
      email: "vafgot@vultukir.org",
      origin: "United States",
      cvcCheck: "Passed",
    },
    {
      id: 3,
      type: "VISA",
      details: "Expires Dec 2029",
      icon: "https://i.postimg.cc/3wzTS4Jn/visa-logo-png-seeklogo-299317.png",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Order Header */}
      <div className="flex justify-between items-center p-4 rounded-lg shadow-sm">
        <div>
          <h3 className="text-lg font-semibold div-text">
            Customer ID #634759
          </h3>
          <p className="text-sm text-gray-500">Aug 17, 2020, 5:48 (ET)</p>
        </div>
        <button className="px-4 py-2 text-sm bg-red-100 dark:bg-red-300 text-red-600 rounded">
          Delete customer
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - User Profile & Premium */}
        <CustomerProfile />

        {/* Right Section */}
        <div className="col-span-2">
          <div className="flex space-x-6 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center py-2 px-4 font-semibold rounded-lg transition duration-300 ${
                  activeTab === tab.name
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          {/* Address Book */}
          <div className="p-6 bg-white rounded-lg shadow-md div-text div-dark border-dark">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700 div-text">
                Address Book
              </h2>
              <button className="flex items-center bg-indigo-100 dark:bg-indigo-300 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-300 transition">
                <FaPlus className="mr-2" /> Add New Address
              </button>
            </div>

            <div className="space-y-4">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="p-4  rounded-lg  flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-500">
                      {address.type}

                      {address.isDefault && (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-300 text-green-600 rounded-lg">
                          Default Address
                        </span>
                      )}
                    </h3>

                    <p className="text-sm text-gray-500">{address.details}</p>
                    <p className="text-lg font-semibold text-gray-500 mt-2">
                      {address.contactName}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {address.contactName1}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {address.contactName2}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {address.contactName3}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button
                      className="text-gray-500 hover:text-blue-700"
                      onClick={() => address.id}
                    >
                      <FaTrash />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      •••
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="p-6 bg-white rounded-lg mt-6 div-text div-dark border-dark">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Payment Methods
              </h2>
              <button className="flex items-center bg-indigo-100 dark:bg-indigo-300 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-300 transition">
                <FaPlus className="mr-2" /> Add Payment Method
              </button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((payment) => (
                <div
                  key={payment.id}
                  className="p-4 rounded-lg flex items-center justify-between "
                >
                  {/* Left Side: Icon & Card Details */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={payment.icon}
                      alt={payment.type}
                      className="w-24 h-14"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 flex items-center space-x-2 div-text">
                        <span>{payment.type}</span>
                        {payment.isDefault && (
                          <span className="ml-2 px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-300 text-green-600 rounded-lg">
                            Default Address
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-500 div-text">
                        {payment.details}
                      </p>

                      {payment.owner && (
                        <div className="text-sm text-gray-500 mt-2 space-y-1 div-text">
                          <p>
                            <strong>Name:</strong> {payment.owner}
                          </p>
                          <p>
                            <strong>Issuer:</strong> {payment.issuer}
                          </p>
                          <p>
                            <strong>Billing Country:</strong>{" "}
                            {payment.billingCountry}
                          </p>
                          <p>
                            <strong>Phone:</strong> {payment.phone}
                          </p>
                          <p>
                            <strong>Email:</strong> {payment.email}
                          </p>
                          <p>
                            <strong>Origin:</strong> {payment.origin}
                          </p>
                          <p>
                            <strong>CVC Check:</strong>{" "}
                            <span className="text-green-600 font-semibold">
                              {payment.cvcCheck}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side: Actions */}
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-gray-500 hover:text-red-700 dark:hover:text-red-700">
                      <FaTrash />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceCustomerAddress;
