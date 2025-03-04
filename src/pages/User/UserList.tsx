import { useState } from "react";
import { FaTrash, FaEye, FaEllipsisV } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnalyticsCards2 from "../../components/re-ui/AnalyticsCards2";
import FiltersAndSearch from "../../components/re-ui/FiltersAndSearch";
import ReUiModal from "../../components/re-ui/ReUiModal";

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
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (index: number) => {
    if (selectedUsers.includes(index)) {
      setSelectedUsers(selectedUsers.filter((i) => i !== index));
    } else {
      setSelectedUsers([...selectedUsers, index]);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Form submitted");
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6  dark:bg-gray-900 shadow-md rounded-lg max-w-full">
      {/* Analytics Cards */}
      <AnalyticsCards2 />

      {/* Filters Section */}
      <div className="div-dark div-text  p-4 rounded-lg shadow-md">
        <FiltersAndSearch onOpenModal={() => setIsModalOpen(true)} />

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 div-dark border-b border-dark text-gray-600 text-left">
                <th className="p-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
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
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.username}</p>
                    </div>
                  </td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.plan}</td>
                  <td className="p-2">{user.billing}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs ${
                        statusClasses[user.status] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <FaEye
                      className="text-gray-500 cursor-pointer hover:text-blue-700 transition"
                      onClick={() => navigate("/user-overview")}
                    />
                    <FaTrash className="text-gray-500 cursor-pointer hover:text-red-700 transition" />
                    <FaEllipsisV className="text-gray-500 cursor-pointer hover:text-gray-700 transition" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500 text-sm">Showing 1 to 10 of 50 entries</p>

          <div className="flex justify-end mt-4 gap-2 mr-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded bg-gray-200 div-dark div-text dark:text-gray-200 dark:border-gray-500 flex items-center gap-2
    ${
      currentPage === 1
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-gray-600 dark:hover:bg-gray-400 transition"
    }`}
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
    ${
      currentPage === totalPages
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-gray-600 dark:hover:bg-gray-400 transition"
    }`}
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-sm text-gray-600 mt-4">
        © 2024, Made with ❤️ by PIXINVENT
      </div>

      {/* Modal Component */}
      <ReUiModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserList;
