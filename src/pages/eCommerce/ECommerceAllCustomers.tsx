import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import customersData from "../../data/customers.json";
import { FiDownload } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBillingAddress, setIsBillingAddress] = useState(true);
  

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
      <div className="bg-white dark:bg-gray-800 p-4">
      <div className="flex justify-between items-center mb-4 dark:bg-gray-800">
        {/* Search Input */}
        <div className="relative dark:bg-gray-800">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
          <input
            type="text"
            placeholder="Search Order"
            className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 ">
                  <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800">
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
        
                  <button className="bg-gray-200 text-black px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <FiDownload className="text-gray-600 " /> Export

                  
                  </button>
                  {/* Add Customer Button */}
        {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Customer
        </button> */}

<button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg dark:text-gray-300"
        >
          + Add Customer
        </button>
                </div>

        
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
        <thead>
          <tr className="bg-white  dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <th className="px-4 py-2 text-left ">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-300">Customers</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-300">Customer ID</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-300">Country</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-300">Orders</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600 dark:text-gray-300">Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {selectedCustomers.map((customer) => (
            <tr key={customer.id} className="border-t dark:border-gray-700">
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
                  <p className="font-semibold dark:text-gray-300">{customer.name}</p>
                  <p className="text-gray-500 text-sm">{customer.email}</p>
                </div>
              </td>
              <td className="px-4 py-2 dark:text-gray-300">{customer.customerId}</td>
              <td className="px-4 py-2 flex items-center gap-2 dark:text-gray-300">
  <img src={customer.countryFlag} alt={customer.country} className="w-6 h-6 rounded-full" />
  {customer.country}
</td>

              <td className="px-4 py-2 dark:text-gray-300">{customer.orders}</td>
              <td className="px-4 py-2 dark:text-gray-300">{customer.totalSpent}</td>
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
            className={`px-3 py-1 border dark:border-gray-700 rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            {"<<"}
          </button>
          <button
            className={`px-3 py-1 border dark:border-gray-700 rounded-md ${
              currentPage === 1 ? "bg-indigo-500 text-white" : ""
            }`}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border dark:border-gray-700 rounded-md ${
                currentPage === index + 1 ? "bg-indigo-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-3 py-1 border dark:border-gray-700 rounded-md ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          >
            {">"}
          </button>
          <button
            className={`px-3 py-1 border dark:border-gray-700 rounded-md ${
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
    
    
    
     {/* Right-side Modal */}
          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
              <div
                className={`w-[400px] h-full bg-white dark:bg-gray-800 shadow-xl p-6 transform transition-transform duration-300 ease-in-out ${
                  isModalOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Add Customer</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-600 hover:text-black"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>
    
               {/* Form Fields */}
        <div className="space-y-4">
          {/* Basic Information */}
          <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold">Basic Information</div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile</label>
            <input
              type="text"
              placeholder="+(123) 456-7890"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </div>

                {/* Shipping Information */}
          <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold mt-4">Shipping Information</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address Line 1</label>
  <input
    type="text"
    placeholder="45 Roker Terrace"
    className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address Line 2</label>
  <input
    type="text"
    placeholder="Address Line 2*"
    className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Town</label>
  <input
    type="text"
    placeholder="New York"
    className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">State/Province</label>
  <input
    type="text"
    placeholder="Southern tip"
    className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Post Code</label>
  <input
    type="text"
    placeholder="734990"
    className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
  <select className="w-full border rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
</div>

{/* Billing Address Toggle */}
<div className="flex items-center justify-between mt-4">
  <div>
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Use as a billing address?
    </label>
    <p className="text-xs text-gray-500 dark:text-gray-400">Please check budget for more info.</p>
  </div>
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" checked={isBillingAddress} onChange={() => setIsBillingAddress(!isBillingAddress)} />
    <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
  </label>
</div>
    
                  <div className="flex justify-start space-x-2 mt-4">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                      Add
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-red-100 text-red-600 px-4 py-2 rounded-lg"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
    
    
    
    
    
    
    
    </div>
  );
};

export default ECommerceAllCustomers;
