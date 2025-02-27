import { FiDownload } from "react-icons/fi";
import { FaUserFriends, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import ReferralStats from "../../components/re-ui/ReferralStats";
import ReferralHowToUse from "../../components/re-ui/ReferralHowToUse";

const referredUsers = [
  {
    name: "Jordan Stevenson",
    email: "amicco@yahoo.com",
    id: "873456",
    status: "Pending",
    value: "$68,907",
    earnings: "$689",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Benedetto Rossiter",
    email: "brossiter15@yahoo.com",
    id: "234762",
    status: "Active",
    value: "$19,234",
    earnings: "$192",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const ECommerceReferrals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // State to track selected users
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const allSelected = selectedUsers.length === referredUsers.length;

  // Toggle all users selection
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(referredUsers.map((user) => user.id));
    }
  };

  // Toggle individual user selection
  const handleSelectUser = (id: string) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-2xl">
      {/* Top Stats Section */}
      <ReferralStats />

      <div className="grid grid-cols-2 gap-6">
        <ReferralHowToUse />

        {/* Invite Friends Section */}
        <div className="bg-white p-6 rounded-lg shadow-md div-dark div-text">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaUserFriends className="text-indigo-600" /> Invite your friends
          </h3>
          <p className="text-gray-500 mb-2">Enter friend’s email address & invite them</p>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg p-2 text-sm border-dark div-dark div-text"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Submit</button>
          </div>

          {/* Referral Link Sharing */}
          <h3 className="text-lg font-semibold">Share the referral link</h3>
          <p className="text-gray-500 mb-2">Share referral link in social media</p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value="https://pixinvent.com/?ref=6479"
              readOnly
              className="w-full border rounded-lg p-2 text-sm border-dark div-dark div-text"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center w-10 h-10">
              <FaFacebookF />
            </button>
            <button className="bg-sky-500 text-white p-2 rounded-lg flex items-center justify-center w-10 h-10">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>

      {/* Referred Users Table */}
      <div className="bg-white p-6 rounded-lg shadow-md border-dark div-dark div-text mt-6">
        <div className="bg-white dark:bg-gray-800 p-4">
          <div className="flex justify-between items-center mb-4 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">Referred Users</h3>
            <div className="flex items-center gap-3 ">
              <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 btn-text">
                <FiDownload className="text-gray-600" /> Export
              </button>
            </div>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-t border-dark">
              <th className="p-4 w-10 text-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={allSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="text-left p-2">Users</th>
              <th className="text-left p-2">Referred ID</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Value</th>
              <th className="text-left p-2">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {referredUsers.map((user) => (
              <tr key={user.id} className="border-b border-dark">
                <td className="p-4 w-10 text-center align-middle">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </td>
                <td className="flex items-center p-2">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>
                <td className="p-2">{user.id}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600 dark:bg-green-300 dark:text-green-800"
                        : "bg-orange-100 text-orange-600 dark:bg-orange-300 dark:text-orange-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-2">{user.value}</td>
                <td className="p-2">{user.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="p-2" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            <FiChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`p-2 ${currentPage === i + 1 ? "text-white bg-indigo-500" : "text-gray-500"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button className="p-2" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceReferrals;
