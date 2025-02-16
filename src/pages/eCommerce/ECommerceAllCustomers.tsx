import { useState, useEffect } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import customersData from "../../data/customers.json";
import { FiDownload } from "react-icons/fi";

interface Customer {
  id: number;
  name: string;
  email: string;
  customerId: string;
  country: string;
  countryFlag: string;
  orders: number;
  totalSpent: string;
  avatar: string;
}

const ECommerceAllCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch customers from JSON file
  useEffect(() => {
    setCustomers(customersData.customers);
  }, []);

  // Filter customers based on search input
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      <div className="bg-white">
      <div className="flex justify-between items-center mb-4 ">
        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Order"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
                  <select className="border p-2 rounded-md">
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
        
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-md flex items-center gap-2">
                    <FiDownload className="text-gray-600" /> Export
                  </button>
                  {/* Add Customer Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Customer
        </button>
                </div>

        
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200 ">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-left ">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Customers</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Customer ID</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Country</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Orders</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {selectedCustomers.map((customer) => (
            <tr key={customer.id} className="border-t">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2 flex items-center gap-2">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">{customer.name}</p>
                  <p className="text-gray-500 text-sm">{customer.email}</p>
                </div>
              </td>
              <td className="px-4 py-2">{customer.customerId}</td>
              <td className="px-4 py-2 flex items-center gap-2 ">
  <img src={customer.countryFlag} alt={customer.country} className="w-6 h-6 rounded-full" />
  {customer.country}
</td>

              <td className="px-4 py-2">{customer.orders}</td>
              <td className="px-4 py-2">{customer.totalSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of{" "}
          {filteredCustomers.length} entries
        </p>

        <div className="flex items-center gap-1">
          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            {"<<"}
          </button>
          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          >
            {">"}
          </button>
          <button
            className={`px-3 py-1 border rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ECommerceAllCustomers;
