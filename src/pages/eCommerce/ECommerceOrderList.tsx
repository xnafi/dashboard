import { useState } from "react";
import { FaCcMastercard, FaCcPaypal, FaRegCalendarCheck, FaRegCheckCircle, FaRegCreditCard, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const orders = [
  {
    id: "#6979",
    date: "Apr 15, 2023, 10:21",
    customer: { name: "Cristine Easom", email: "ceasomw@theguardian.com", avatar: "https://i.pravatar.cc/40?img=1" },
    payment: "Pending",
    status: "Delivered",
    method: "mastercard",
    lastDigits: "2356",
  },
  {
    id: "#6624",
    date: "Apr 17, 2023, 6:43",
    customer: { name: "Fayre Screech", email: "fscreechs@army.mil", avatar: "https://i.pravatar.cc/40?img=2" },
    payment: "Failed",
    status: "Delivered",
    method: "mastercard",
    lastDigits: "2077",
  },
  {
    id: "#9305",
    date: "Apr 17, 2023, 8:05",
    customer: { name: "Pauline Pfaffe", email: "ppfaffe1@wikia.com", avatar: "https://i.pravatar.cc/40?img=3" },
    payment: "Cancelled",
    status: "Out for Delivery",
    method: "paypal",
  },
  {
    id: "#8005",
    date: "Apr 22, 2023, 3:01",
    customer: { name: "Maurits Nealey", email: "mnealey@japanpost.jp", avatar: "https://i.pravatar.cc/40?img=4" },
    payment: "Paid",
    status: "Dispatched",
    method: "mastercard",
    lastDigits: "1555",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "text-orange-500 bg-orange-100";
    case "Failed":
      return "text-red-500 bg-red-100";
    case "Paid":
      return "text-green-500 bg-green-100";
    case "Cancelled":
      return "text-gray-500 bg-gray-100";
    default:
      return "text-gray-700 bg-gray-200";
  }
};

const getDeliveryStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "text-green-700 bg-green-100";
    case "Out for Delivery":
      return "text-purple-700 bg-purple-100";
    case "Dispatched":
      return "text-orange-700 bg-orange-100";
    case "Ready to Pickup":
      return "text-indigo-700 bg-indigo-100";
    default:
      return "text-gray-700 bg-gray-200";
  }
};

const ECommerceOrderList = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [search, setSearch] = useState("");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false); 
  const [orderList, setOrderList] = useState(orders); // Add state for orders

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]); // Deselect all
    } else {
      setSelectedOrders(orders.map(order => order.id)); // Select all
    }
    setSelectAll(!selectAll); 
  };

  const toggleSelect = (id: string) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((order) => order !== id) : [...prev, id]
    );
  };

   // Function to handle order deletion
   const handleDelete = (id: string) => {
    const updatedOrders = orderList.filter(order => order.id !== id);
    setOrderList(updatedOrders); 
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Summary Row */}
      <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-white div-text div-dark border-dark rounded-md shadow">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold">56</h2>
            <p className="text-gray-500">Pending Payment</p>
          </div>
          <FaRegCalendarCheck className="text-gray-400 text-lg ml-auto" />
        </div>
        <div className="flex items-center gap-3 border-l border-dark pl-4">
          <div>
            <h2 className="text-xl font-bold">12,689</h2>
            <p className="text-gray-500">Completed</p>
          </div>
          <FaRegCheckCircle className="text-gray-400 text-lg ml-auto" />
        </div>
        <div className="flex items-center gap-3 border-l border-dark pl-4">
          <div>
            <h2 className="text-xl font-bold">124</h2>
            <p className="text-gray-500">Refunded</p>
          </div>
          <FaRegCreditCard className="text-gray-400 text-lg ml-auto " />
        </div>
        <div className="flex items-center gap-3 border-l border-dark pl-4">
          <div>
            <h2 className="text-xl font-bold">32</h2>
            <p className="text-gray-500">Failed</p>
          </div>
          <FaRegTimesCircle className="text-gray-400 text-lg ml-auto" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Order"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3 div-text div-dark border-dark"
        />

        <div className="flex items-center gap-3">
          <select className="border p-2 rounded-md div-text div-dark border-dark">
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>

          <button className="bg-gray-200 text-black px-4 py-2 rounded-md flex items-center gap-2 div-text div-dark border-dark">
            <FiDownload className="text-gray-600" /> Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md div-text div-dark border-dark">
          <thead>
            <tr className="border-b text-left text-sm text-gray-600 div-text div-dark border-dark">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </th>
              <th className="p-3">Order</th>
              <th className="p-3">Date</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Status</th>
              <th className="p-3">Method</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
  {orderList.map((order) => ( 
    <tr
      key={order.id}
      className="border-b div-text div-dark border-dark text-sm hover:bg-gray-50 transition"
    >
      <td className="p-3">
        <input
          type="checkbox"
          checked={selectedOrders.includes(order.id)}
          onChange={() => toggleSelect(order.id)}
          className="cursor-pointer"
        />
      </td>
      <td className="p-3 text-blue-500">{order.id}</td>
      <td className="p-3">{order.date}</td>
      <td className="p-3 flex items-center gap-3">
        <img
          src={order.customer.avatar}
          alt={order.customer.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-medium">{order.customer.name}</span>
          <span className="text-xs text-gray-500">
            {order.customer.email}
          </span>
        </div>
      </td>
      <td className="p-3">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded div-text div-dark border-dark ${getStatusColor(
            order.payment
          )}`}
        >
          {order.payment}
        </span>
      </td>
      <td className="p-3">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded div-text div-dark border-dark ${getDeliveryStatusColor(
            order.status
          )}`}
        >
          {order.status}
        </span>
      </td>
      <td className="p-3 flex items-center ">
        {order.method === "mastercard" ? (
          <FaCcMastercard className="text-red-600 text-lg mr-2 mb-2" />
        ) : (
          <FaCcPaypal className="text-blue-600 text-lg mr-2 " />
        )}
        <span className="text-gray-700 text-sm">
          {order.lastDigits ? `•••• ${order.lastDigits}` : "N/A"}
        </span>
      </td>
      <td className="p-3 relative">
        <button className="text-indigo-600 hover:underline group">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
            onClick={() => handleDelete(order.id)} 
          >
            <FaTrash className="text-gray-600 hover:text-red-600" />
           
          </li>
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <nav className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm bg-gray-200 rounded">‹</button>
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 text-sm rounded ${
                currentPage === page
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 text-sm bg-indigo-200 rounded">›</button>
        </nav>
      </div>
    </div>
  );
};

export default ECommerceOrderList;
