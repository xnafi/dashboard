import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEye, FaFileInvoice, FaRegUser, FaCheckDouble, FaBan, FaEllipsisV, FaCheckCircle, FaRegClock } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const invoices = [
  {
    id: "#4910",
    status: "Paid",
    client: "Jordan Stevenson",
    email: "Layne_Kuvalis@gmail.com",
    total: "$3428",
    issuedDate: "22 Oct 2019",
    balance: "Paid",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: "#4909",
    status: "Pending",
    client: "Richard Payne",
    email: "Layne_Kuvalis@gmail.com",
    total: "$2872",
    issuedDate: "18 Oct 2019",
    balance: "$883",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

export default function InvoiceList() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showCount, setShowCount] = useState("10");
  const [invoiceStatus, setInvoiceStatus] = useState("All");

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 w-full dark:bg-gray-900  dark:text-gray-500">
      {/* Top Analytics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6 ">
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">24</h3>
            <p className="text-gray-500">Clients</p>
          </div>
          <FaRegUser className=" text-2xl text-gray-500" />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">165</h3>
            <p className="text-gray-500">Invoices</p>
          </div>
          <FaFileInvoice className="text-gray-500 text-2xl" />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">$2.46k</h3>
            <p className="text-gray-500">Paid</p>
          </div>
          <FaCheckDouble className="text-gray-500 text-2xl" />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">$876</h3>
            <p className="text-gray-500">Unpaid</p>
          </div>
          <FaBan className=" text-2xl text-gray-500" />
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <select className="border p-2 rounded" value={showCount} onChange={(e) => setShowCount(e.target.value)}>
            <option value="10">Show 10</option>
            <option value="20">Show 20</option>
            <option value="50">Show 50</option>
          </select>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded">+ Create Invoice</button>
        </div>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search Invoice" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded" value={invoiceStatus} onChange={(e) => setInvoiceStatus(e.target.value)}>
            <option value="All">Invoice Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100 text-start text-sm text-gray-600 ">
        <th className="p-3">
          <input type="checkbox" />
        </th>
        <th className="p-3 text-start">#</th>
        <th className="p-3 text-start">Status</th>
        <th className="p-3 text-start">Client</th>
        <th className="p-3 text-start">Total</th>
        <th className="p-3 text-start">Issued Date</th>
        <th className="p-3 text-start">Balance</th>
        <th className="p-3 text-start">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
      {invoices.map((invoice) => (
        <tr key={invoice.id} className="border-t hover:bg-gray-50 transition">
          <td className="p-3 text-center">
            <input
              type="checkbox"
              checked={selected.includes(invoice.id)}
              onChange={() => toggleSelect(invoice.id)}
            />
          </td>
          <td className="p-3 text-blue-500">
            <Link to={`/invoice/${invoice.id}`} className="hover:underline">
              {invoice.id}
            </Link>
          </td>
          <td className="p-3  gap-2 ">
            {invoice.status === "Paid" ? (
              <FaCheckCircle className="text-gray-500" />
            ) : (
              <FaRegClock className="text-yellow-500" />
            )}
            {/* <span>{invoice.status}</span> */}
          </td>
          <td className="p-3 flex flex-row text-start gap-3">
            <img
              src={invoice.avatar}
              alt="Avatar"
              className="w-8 h-8 rounded-full "
            />
            <div className="truncate w-44">
              <p className="font-semibold truncate">{invoice.client}</p>
              <p className="text-xs text-gray-500 truncate">{invoice.email}</p>
            </div>
          </td>
          <td className="p-3">{invoice.total}</td>
          <td className="p-3">{invoice.issuedDate}</td>
          <td className="p-3">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                invoice.balance === "Paid"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {invoice.balance}
            </span>
          </td>
          <td className="p-3 flex flex-row mb-4 gap-2 ">
            <FaEye className="text-gray-500 cursor-pointer hover:text-blue-700 transition" />
            <FaTrash className="text-gray-500 cursor-pointer hover:text-red-700 transition" />
            <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Pagination */}
<div className="flex justify-end mt-4 gap-2">
  <button className="px-4 py-2 border rounded bg-gray-200 flex items-center gap-2 hover:bg-gray-300 transition">
    <FaChevronLeft className="text-gray-600" />
  </button>
  <button className="px-4 py-2 border rounded bg-gray-200 text-black mx-2 hover:bg-indigo-600 transition">
    1
  </button>
  <button className="px-4 py-2 border rounded bg-gray-200 text-black mx-2 hover:bg-indigo-600 transition">
    2
  </button>
  <button className="px-4 py-2 border rounded bg-gray-200 text-black mx-2 hover:bg-indigo-600 transition">
    3
  </button>
  <button className="px-4 py-2 border rounded bg-gray-200 flex items-center gap-2 hover:bg-gray-300 transition">
   <FaChevronRight className="text-gray-600" />
  </button>
</div>
{/* Footer */}
<div className="text-sm text-gray-600  ">
        © 2024, Made with ❤️ by PIXINVENT
      </div>
    </div>
  );
}
