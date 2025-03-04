import { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaFileInvoice,
  FaTrash,
  FaEye,
  FaSyncAlt,
  FaDownload,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import UserDetails from "../../components/re-ui/UserDetails";

const UserOverview = () => {
  // Invoice Data
  const invoices = [
    { id: 4910, status: "paid", total: "$3428", date: "22 Oct 2019" },
    { id: 4909, status: "paid", total: "$2872", date: "18 Oct 2019" },
    { id: 4908, status: "pending", total: "$4077", date: "01 Feb 2020" },
    { id: 4907, status: "sent", total: "$2060", date: "08 Dec 2019" },
    { id: 4906, status: "due", total: "$3128", date: "10 Sep 2019" },
    { id: 4905, status: "sent", total: "$2032", date: "30 Nov 2019" },
    { id: 4904, status: "paid", total: "$2230", date: "19 Nov 2019" },
    { id: 4903, status: "due", total: "$4120", date: "10 Oct 2019" },
    { id: 4902, status: "paid", total: "$3225", date: "15 Aug 2019" },
    { id: 4901, status: "pending", total: "$1985", date: "22 Jul 2019" },
  ];

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 5;
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = invoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  const nextPage = () => {
    if (indexOfLastInvoice < invoices.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const [showCount, setShowCount] = useState("10");

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 max-w-full dark:bg-gray-900 div-text">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-gray-900  div-text">
        {/* Left Side - User Details & Plan */}
        <div className="lg:col-span-1">
          <UserDetails />
        </div>

        {/* Right Side - Invoice List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 div-dark  div-text">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Invoice List</h3>
            <div className="flex items-center gap-4 ">
              <select
                className="border p-2 rounded div-dark  div-text border-dark"
                value={showCount}
                onChange={(e) => setShowCount(e.target.value)}
              >
                <option value="10">Show 10</option>
                <option value="20">Show 20</option>
                <option value="50">Show 50</option>
              </select>
              <button className="flex items-center px-3 py-2 bg-gray-400 div-dark div-text border border-dark text-white  div-text rounded-md">
                <FaDownload className="mr-2" /> Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full  border-collapse">
              <thead>
                <tr className="text-gray-600 text-sm bg-gray-100 div-dark  div-text">
                  <th className="py-2 px-8 text-left">#</th>
                  <th className="py-2 px-8 text-left">Status</th>
                  <th className="py-2 px-8 text-left">Total</th>
                  <th className="py-2 px-8 text-left">Issued Date</th>
                  <th className="py-2 px-9 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentInvoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b text-gray-700 div-text dark:border-gray-500"
                  >
                    <td className="py-2 px-8">#{invoice.id}</td>
                    <td className="py-2 px-8">
                      {invoice.status === "paid" && (
                        <FaCheckCircle className="text-green-500" />
                      )}
                      {invoice.status === "pending" && (
                        <FaSyncAlt className="text-blue-500" />
                      )}
                      {invoice.status === "sent" && (
                        <FaFileInvoice className="text-gray-500" />
                      )}
                      {invoice.status === "due" && (
                        <FaClock className="text-orange-500" />
                      )}
                    </td>
                    <td className="py-2 px-8">{invoice.total}</td>
                    <td className="py-2 px-8">{invoice.date}</td>
                    <td className="py-2 px-9 flex space-x-2">
                      <FaEye className="text-gray-500 cursor-pointer hover:text-blue-700 transition" />
                      <FaTrash className="text-gray-500 cursor-pointer hover:text-red-700 transition" />
                      <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={prevPage}
              className="px-3 py-1 bg-gray-200 div-dark div-text rounded-md"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextPage}
              className="px-3 py-1 bg-gray-200 div-dark div-text rounded-md"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
