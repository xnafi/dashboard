import { FaEdit } from "react-icons/fa";

const ECommerceOrderDetails = () => {
  const activities = [
    {
      status: "Order was placed (Order ID: #32543)",
      desc: "Your order has been placed successfully",
      date: "Tuesday 11:29 AM",
    },
    {
      status: "Pick-up",
      desc: "Pick-up scheduled with courier",
      date: "Wednesday 11:29 AM",
    },
    {
      status: "Dispatched",
      desc: "Item has been picked up by courier",
      date: "Thursday 8:15 AM",
    },
    {
      status: "Package arrived",
      desc: "Package arrived at an Amazon facility, NY",
      date: "Saturday 15:20 AM",
    },
    {
      status: "Dispatched for delivery",
      desc: "Package has left an Amazon facility, NY",
      date: "Today 14:12 PM",
    },
    {
      status: "Delivery",
      desc: "Package will be delivered by tomorrow",
      date: "",
    },
  ];
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white rounded-lg shadow-md ">
      {/* Order Header */}
      <div className="flex justify-between items-center p-4  rounded-lg shadow-sm div-text ">
        <div>
          <div className="flex items-center space-x-2 bb">
            <h3 className="text-lg font-semibold">Order #32543</h3>
            <div className="flex space-x-2">
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-green-200 text-green-500 rounded">
                Paid
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-blue-200 text-blue-400 rounded">
                Ready to pick
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500">Aug 17, 2020, 5:48 (ET)</p>
        </div>
        <div>
          <span className="px-3 py-3 text-sm bg-red-50 dark:bg-red-300 text-red-500 rounded">
            Delete Order
          </span>
        </div>
      </div>
      <div className=" bg-gray-50 mt-4  dark:bg-gray-900 dark:text-white rounded-lg shadow-md w-full mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-4">
          {/* Order Details */}
          <div className="p-4 border rounded-lg shadow-sm div-text div-dark border-dark">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Order details</h3>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left border-dark">
                  <th className="p-2"></th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    img: "📱",
                    name: "OnePlus 7Pro",
                    brand: "OnePlus",
                    price: 799,
                    qty: 1,
                  },
                  {
                    img: "🖱️",
                    name: "Magic Mouse",
                    brand: "Google",
                    price: 89,
                    qty: 1,
                  },
                  {
                    img: "🪑",
                    name: "Wooden Chair",
                    brand: "Insofar",
                    price: 289,
                    qty: 2,
                  },
                  {
                    img: "👟",
                    name: "Air Jordan",
                    brand: "Nike",
                    price: 299,
                    qty: 2,
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-dark">
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2 flex items-center space-x-2">
                      <span className="text-xl">{item.img}</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <br />
                        <span className="text-xs text-gray-500">
                          {item.brand}
                        </span>
                      </div>
                    </td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">{item.qty}</td>
                    <td className="p-2">${item.price * item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3 ml-96 pl-28 text-right text-sm">
              <div className="flex justify-items-start">
                <p>Subtotal:</p>
                <p className="font-semibold ml-14">$2,093</p>
              </div>
              <div className="flex justify-items-start">
                <p>Shipping fee:</p>
                <p className="font-semibold ml-8">$2</p>
              </div>
              <div className="flex justify-items-start">
                <p>Tax:</p>
                <p className="font-semibold ml-16 pl-6">$28</p>
              </div>
              <div className="flex justify-items-start text-lg font-semibold border-t border-dark mt-2 pt-2">
                <p>Total:</p>
                <p className="ml-16">$2,113</p>
              </div>
            </div>
          </div>

          {/* Shipping Activity */}
          <div className="p-6 bg-white shadow-md rounded-lg  div-text div-dark">
            <h3 className="text-lg font-semibold text-gray-800 div-text">
              Shipping activity
            </h3>
            <div className="mt-4 space-y-5 ">
              {activities.map((activity, index) => (
                <div key={index} className="flex space-x-4 items-start">
                  {/* Timeline Indicator */}
                  <div className="relative">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        index === activities.length - 1
                          ? "bg-gray-500"
                          : "bg-indigo-500"
                      }`}
                    ></div>
                    {index !== activities.length - 1 && (
                      <div className="w-0.5 bg-gray-300 dark:bg-indigo-500 absolute top-3 left-1/2 h-10 "></div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <h1 className="font-medium text-gray-800 dark:text-gray-500">
                        {activity.status}
                      </h1>
                      {activity.date && (
                        <p className="text-xs text-gray-400 div-dark">{activity.date}</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 div-dark">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {/* Customer Details */}
          <div className="p-4 border rounded-lg shadow-sm div-text div-dark border-dark">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Customer details</h3>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </div>
            <p className="font-medium mt-2">Shamus Tuttle</p>
            <p className="text-sm text-gray-500">Customer ID: #47389</p>
            <p className="text-sm mt-6 mb-4">12 Orders</p>
            <div className="mt-2">
              <h1>Contact Info</h1>
              <p className="text-sm text-gray-500">
                Email: Sheldon88@yahoo.com
              </p>
              <p className="text-sm text-gray-500">
                Mobile: +1 (609) 972-22-22
              </p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="p-4 border rounded-lg shadow-sm div-text div-dark border-dark">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Shipping address</h3>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </div>
            <p className="text-sm mt-2">
              45 Roker Terrace
              <br />
              Latheronwheel
              <br />
              KW5 8NW, London
              <br />
              UK
            </p>
          </div>

          {/* Billing Address & Payment */}
          <div className="p-4 border rounded-lg shadow-sm div-text div-dark border-dark">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Billing address</h3>
              <FaEdit className="text-gray-500 cursor-pointer" />
            </div>
            <p className="text-sm mt-2">
              45 Roker Terrace
              <br />
              Latheronwheel
              <br />
              KW5 8NW, London
              <br />
              UK
            </p>
            <div className="mt-2">
              <h4 className="font-medium">Mastercard</h4>
              <p className="text-sm text-gray-500">Card Number: ******4291</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceOrderDetails;
