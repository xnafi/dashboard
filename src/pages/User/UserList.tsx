import { useState } from "react";
import { FaTrash, FaEye, FaEllipsisV } from "react-icons/fa";

import { FiUsers, FiUserPlus, FiUserCheck, FiUserMinus } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const users = [
  {
    name: "Jordan Stevenson",
    username: "jordan.stevenson",
    role: "Admin",
    plan: "Enterprise",
    billing: "Auto Debit",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Richard Payne",
    username: "richard247",
    role: "Editor",
    plan: "Team",
    billing: "Auto Debit",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Jennifer Summers",
    username: "summers.45",
    role: "Author",
    plan: "Company",
    billing: "Auto Debit",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const statusClasses: { [key: string]: string } = {
  Active: "bg-green-100 text-green-600",
  Pending: "bg-orange-100 text-orange-600",
  Inactive: "bg-gray-200 text-gray-600",
};

const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; 
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6  dark:bg-gray-900 shadow-md rounded-lg max-w-full">
      {/* Analytics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
      {/* Session Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 border-dark">
        <div>
          <p className="text-sm text-gray-500 div-text">Session</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            21,459 <span className="text-green-500 text-sm">(+29%)</span>
          </p>
          <p className="text-xs text-gray-400">Total Users</p>
        </div>
        <div className="bg-purple-100 p-2 rounded-lg">
          <FiUsers className="text-purple-600 text-2xl" />
        </div>
      </div>

      {/* Paid Users Card */}
      <div className="bg-white border-dark div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 ">
        <div>
          <p className="text-sm text-gray-500 div-text">Paid Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            4,567 <span className="text-green-500 text-sm">(+18%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-red-100 p-2 rounded-lg">
          <FiUserPlus className="text-red-500 text-2xl" />
        </div>
      </div>

      {/* Active Users Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-sm text-gray-500 div-text">Active Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            19,860 <span className="text-red-500 text-sm">(-14%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-green-100 p-2 rounded-lg">
          <FiUserCheck className="text-green-500 text-2xl" />
        </div>
      </div>

      {/* Pending Users Card */}
      <div className="bg-white div-dark div-text p-4 rounded-lg shadow-md flex justify-between items-center border border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-sm text-gray-500 div-text">Pending Users</p>
          <p className="text-2xl font-semibold text-gray-900 div-text">
            237 <span className="text-green-500 text-sm">(+42%)</span>
          </p>
          <p className="text-xs text-gray-400">Last week analytics</p>
        </div>
        <div className="bg-orange-100 p-2 rounded-lg">
          <FiUserMinus className="text-orange-500 text-2xl" />
        </div>
      </div>
    </div>

      {/* Filters Section */}
      <div className="div-dark div-text  p-4 rounded-lg shadow-md">
      <div>
      <h2 className="mb-4 text-lg font-semibold div-text">Filters</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        
        <select className="border border-dark  rounded-lg p-2 text-gray-700  bg-white div-dark div-text w-full">
          <option>Select Role</option>
        </select>
        <select className="border border-dark  rounded-lg p-2 text-gray-700  bg-white div-dark div-text w-full">
          <option>Select Plan</option>
        </select>
        <select className="border border-dark  rounded-lg p-2 text-gray-700  bg-white div-dark div-text w-full">
          <option>Select Status</option>
        </select>
      </div>
      </div>

      {/* Search and Actions */}
      <div className="flex justify-between items-center mb-4">
        {/* Entries Dropdown */}
        <select className="border border-dark  rounded-md px-3 py-2 text-gray-700  bg-white div-dark div-text w-20">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search User"
          className="border ml-80 pl-36 border-dark  rounded-md px-4 py-2 text-gray-700  bg-white div-dark div-text w-1/3"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-dark  rounded-md px-4 py-2 text-gray-700  bg-gray-100 div-dark div-text">
            <FiDownload className="text-gray-500 " />
            Export
          </button>
          <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          <IoMdAdd className="text-white" />
          Add New User
        </button>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 div-dark div-text text-gray-600  text-left">
              <th className="p-2"><input type="checkbox" /></th>
              <th className="p-2">USER</th>
              <th className="p-2">ROLE</th>
              <th className="p-2">PLAN</th>
              <th className="p-2">BILLING</th>
              <th className="p-2">STATUS</th>
              <th className="p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-2"><input type="checkbox" /></td>
                <td className="p-2 flex items-center gap-2">
                  <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.username}</p>
                  </div>
                </td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.plan}</td>
                <td className="p-2">{user.billing}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-lg text-xs ${statusClasses[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  <FaEye className="text-gray-500 cursor-pointer hover:text-blue-700 transition" />
                              <FaTrash className="text-gray-500 cursor-pointer hover:text-red-700 transition" />
                              <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Add User Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
    <div className="bg-white div-dark div-text w-80 h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>
      <h2 className="text-xl font-semibold mb-4">Add New User</h2>
      <div className="space-y-4">
        <input className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500" type="text" placeholder="Full Name" />
        <input className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500" type="text" placeholder="Username" />
        <input className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500" type="email" placeholder="Email" />
        <input className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500" type="text" placeholder="Company" />
        
        <select className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500">
          <option>Select Country</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
        </select>

        <input className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500" type="text" placeholder="Contact" />

        <select className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500">
          <option>Select Role</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Author</option>
        </select>

        <select className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500">
          <option>Select Plan</option>
          <option>Basic</option>
          <option>Premium</option>
          <option>Enterprise</option>
        </select>

        <select className="w-full p-1 border rounded div-dark div-text  dark:border-gray-500">
          <option>Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded">Submit</button>
        <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-red-300 text-red-700 dark:bg-red-900 dark:bg-transparent dark:text-red-400 rounded dark:hover:bg-red-600">Cancel</button>
      </div>
    </div>
  </div>
)}



      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
      <p className="text-gray-500 text-sm">Showing 1 to 10 of 50 entries</p>
      
      <div className="flex justify-end mt-4 gap-2 mr-2">
  {/* Previous Button */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 border rounded bg-gray-200 div-dark div-text dark:text-gray-200 dark:border-gray-500 flex items-center gap-2
    ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600 dark:hover:bg-gray-400 transition"}`}
  >
    <FaChevronLeft className="text-gray-600" />
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`px-4 py-2 border rounded mx-1 dark:border-gray-500 transition ${
        currentPage === page
          ? "bg-indigo-500 text-white dark:bg-indigo-300"
          : "bg-gray-200 div-dark div-text dark:text-gray-200 hover:bg-indigo-500 dark:hover:bg-indigo-300"
      }`}
    >
      {page}
    </button>
  ))}

  {/* Next Button */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 border rounded bg-gray-200 div-dark div-text dark:text-gray-200 dark:border-gray-500 flex items-center gap-2
    ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600 dark:hover:bg-gray-400 transition"}`}
  >
    <FaChevronRight className="text-gray-600" />
  </button>
</div>
</div>
</div>

      {/* Footer */}
      <div className="text-sm text-gray-600 mt-4 ">
              © 2024, Made with ❤️ by PIXINVENT
            </div>
    </div>
  );
};

export default UserList;
