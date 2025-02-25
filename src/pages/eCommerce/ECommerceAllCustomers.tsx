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
  const [itemsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBillingAddress, setIsBillingAddress] = useState(true);
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setCustomers(customersData.customers);
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Select all customers in the current page
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCustomers([]); // Deselect all
    } else {
      setSelectedCustomers(displayedCustomers.map((customer) => customer.id)); // Select all visible customers
    }
    setSelectAll(!selectAll);
  };

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id)
        ? prev.filter((customerId) => customerId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 div-text max-w-full rounded-lg shadow-md">
      <div className="bg-white div-dark p-4">
        <div className="flex justify-between items-center mb-4 div-dark">
          <div className="relative div-dark">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
            <input
              type="text"
              placeholder="Search Order"
              className="pl-10 pr-4 py-2 border border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 div-dark"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="border p-2 rounded-md border-dark div-dark">
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <button className="bg-gray-200 text-black px-4 py-2 border rounded-md flex items-center gap-2 border-dark div-dark">
              <FiDownload className="text-gray-600" /> Export
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Customer
            </button>
          </div>
        </div>

        <table className="w-full border-collapse border border-gray-200 border-dark">
          <thead>
            <tr className="bg-white dark:border-gray-500 div-dark">
              <th className="px-4 py-2 text-left">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
              <th className="px-4 py-2 text-left">Customers</th>
              <th className="px-4 py-2 text-left">Customer ID</th>
              <th className="px-4 py-2 text-left">Country</th>
              <th className="px-4 py-2 text-left">Orders</th>
              <th className="px-4 py-2 text-left">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.map((customer) => (
              <tr key={customer.id} className="border-t border-dark">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={() => handleSelectCustomer(customer.id)}
                  />
                </td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-semibold">{customer.name}</p>
                    <p className="text-gray-500 text-sm">{customer.email}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{customer.customerId}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={customer.countryFlag} alt={customer.country} className="w-6 h-6 rounded-full" />
                  {customer.country}
                </td>
                <td className="px-4 py-2">{customer.orders}</td>
                <td className="px-4 py-2">{customer.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of{" "}
            {filteredCustomers.length} entries
          </p>

          <div className="flex items-center gap-1">
            <button
              className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              {"<<"}
            </button>
            <button
              className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {"<"}
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 border rounded-md ${currentPage === index + 1 ? "bg-indigo-500 text-white" : ""}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {">"}
            </button>
            <button
              className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
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
            className={`w-[400px] h-full bg-white div-dark div-text shadow-xl p-6 transform transition-transform duration-300 ease-in-out translate-x-0 overflow-y-auto ${
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
              <div className="text-gray-500 div-text text-sm font-semibold">
                Basic Information
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Mobile
                </label>
                <input
                  type="text"
                  placeholder="+(123) 456-7890"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              {/* Shipping Information */}
              <div className="text-gray-500 div-text text-sm font-semibold mt-4">
                Shipping Information
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Address Line 1
                </label>
                <input
                  type="text"
                  placeholder="45 Roker Terrace"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Address Line 2
                </label>
                <input
                  type="text"
                  placeholder="Address Line 2*"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Town
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  State/Province
                </label>
                <input
                  type="text"
                  placeholder="Southern tip"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Post Code
                </label>
                <input
                  type="text"
                  placeholder="734990"
                  className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 div-text ">
                  Country
                </label>
                <select className="w-full border rounded-lg px-3 py-2 bg-gray-100 input-field ">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              {/* Billing Address Toggle */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <label className="text-sm font-medium text-gray-400 ">
                    Use as a billing address?
                  </label>
                  <p className="text-xs text-gray-500 div-text">
                    Please check budget for more info.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isBillingAddress}
                    onChange={() => setIsBillingAddress(!isBillingAddress)}
                  />
                  <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="flex justify-start space-x-2 mt-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-100 dark:bg-red-300 text-red-600 px-4 py-2 rounded-lg"
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
