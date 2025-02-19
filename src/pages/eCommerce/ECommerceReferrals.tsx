import { FiDownload } from "react-icons/fi";
import { FaUserFriends, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

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
  {
    name: "Bentlee Emblin",
    email: "bemblint@gmail.com",
    id: "897246",
    status: "Active",
    value: "$28,849",
    earnings: "$286",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const ECommerceReferrals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-2xl">
      {/* Top Stats Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Total Earning",
            value: "$24,983",
            img: "https://i.postimg.cc/SxtdJxFh/Icon.png",
          },
          {
            title: "Unpaid Earning",
            value: "$8,647",
            img: "https://i.postimg.cc/bvDTbfp2/Icon-1.png",
          },
          {
            title: "Signups",
            value: "2,367",
            img: "https://i.postimg.cc/MGCYm3p3/Icon-2.png",
          },
          {
            title: "Conversion Rate",
            value: "4.5%",
            img: "https://i.postimg.cc/fLWcYWDL/Icon-3.png",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-500">{stat.title}</p>
            </div>
            <img
              src={stat.img}
              alt={stat.title}
              className="w-10 h-10 rounded-full"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* How to use section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">How to use</h3>
          <p className="text-gray-500 mb-4">
            Integrate your referral code in 3 easy steps.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                img: "https://i.postimg.cc/R0dfCrKz/Icon-4.png",
                text: "Create & validate your referral link and get",
                reward: "$50",
              },
              {
                img: "https://i.postimg.cc/V6y95ykG/Icon-2x.jpg",
                text: "For every new signup you get",
                reward: "10%",
              },
              {
                img: "https://i.postimg.cc/265WVH7L/Icon-5.png",
                text: "Get other friends to generate link and get",
                reward: "$100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.img}
                  alt="Step Icon"
                  className="w-12 h-12 mb-2"
                />
                <p className="text-gray-500 text-sm">{item.text}</p>
                <span className="text-indigo-600 font-semibold">
                  {item.reward}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Friends Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaUserFriends className="text-indigo-600" /> Invite your friends
          </h3>
          <p className="text-gray-500 mb-2">
            Enter friend’s email address & invite them
          </p>

          <div className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg p-2 text-sm"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>

          {/* Referral Link Sharing */}
          <h3 className="text-lg font-semibold">Share the referral link</h3>
          <p className="text-gray-500 mb-2">
            Share referral link in social media
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value="https://pixinvent.com/?ref=6479"
              readOnly
              className="w-full border rounded-lg p-2 text-sm"
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="bg-white dark:bg-gray-800 p-4">
          <div className="flex justify-between items-center mb-4 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-4">Referred Users</h3>
            <div className="flex items-center gap-3 ">
              <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <button className="bg-gray-200 text-gray-500 px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800  btn-text">
                <FiDownload className="text-gray-600 " /> Export
              </button>
            </div>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 w-10 text-center">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="text-left p-2">Users</th>
              <th className="text-left p-2">Referred ID</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Value</th>
              <th className="text-left p-2">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {referredUsers.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 w-10 text-center align-middle">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="flex items-center p-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
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
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
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
          <button
            className="p-2"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            <FiChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`p-2 ${
                currentPage === i + 1
                  ? "text-white bg-indigo-500"
                  : "text-gray-500"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="p-2"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceReferrals;
