/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaClock,
  FaEllipsisH,
  FaSearch,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import reviewsData from "../../data/reviews.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ECommerceManageReview = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const filteredReviews = reviews.filter((review) =>
    review.reviewer.toLowerCase().includes(search.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/e-commerce-order-details`);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleDelete = (reviewId: number) => {
    // Filter out the review by id
    const updatedReviews = reviews.filter((review) => review.id !== reviewId);

    // Update the state with the new list of reviews
    setReviews(updatedReviews);

    // Optionally, close the dropdown after the delete action
    setIsOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Top Section - Stats */}
      {/* Top Review Statistics */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex items-center text-2xl font-bold bg-white p-4 div-dark div-text">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex items-center text-2xl font-bold text-indigo-500">
              4.89 <FaStar className="text-indigo-500 ml-2" />
            </div>
            <p className="font-semibold text-sm text-gray-700 mt-1 div-text">
              Total 187 reviews
            </p>
            <p className="text-gray-500 text-sm font-normal mt-2 div-text">
              All reviews are from genuine customers
            </p>
            <button className="bg-purple-100 text-indigo-700 px-3 py-1 rounded mt-3 text-sm font-normal">
              +5 This week
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 pl-6 text-gray-700 div-text font-normal">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="text-sm w-12">{star} Star</span>
                <div className="bg-gray-200 h-2 flex-1 rounded relative mx-2">
                  <div
                    className="bg-indigo-500 h-2 rounded "
                    style={{ width: `${[90, 50, 30, 20, 10][index]}%` }}
                  ></div>
                </div>
                <span className="text-sm">{[124, 40, 12, 7, 2][index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Statistics */}
        <div className="flex justify-between items-center text-2xl font-bold div-dark div-text p-4 ">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="sub-heading div-text">Reviews statistics</h3>
            <div className="flex items-center gap-2 text-sm mt-2 text-gray-700 font-normal div-text">
              <span>12 New reviews</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md text-xs font-medium">
                +8.4%
              </span>
            </div>
            <div className="text-sm font-medium text-green-600 mt-14">
              87%{" "}
              <span className="text-gray-700 font-normal div-text">
                Positive reviews
              </span>
            </div>
            <div className="text-xs text-gray-500 font-normal">
              Weekly Report
            </div>
          </div>

          {/* Right Section - Bar Chart */}
          <div className="flex-1 pl-6 flex items-end gap-2 h-36 mt-4">
            {[10, 20, 30, 25, 60, 45, 35].map((value, index) => (
              <div
                key={index}
                className={`w-4 h-2 rounded transition-all ${
                  index === 4 ? "bg-green-600" : "bg-green-300"
                }`}
                style={{ height: `${value}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4">
        <div className="flex justify-between items-center mb-4 dark:bg-gray-800">
          {/* Search Input */}
          <div className="relative dark:bg-gray-800">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
            <input
              type="text"
              placeholder="Search Review"
              className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 ">
            <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
              <option value="7">All</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <button className="bg-gray-200 text-gray-500 px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800  btn-text">
              <FiDownload className="text-gray-600 " /> Export
            </button>
          </div>
        </div>

        {/* Review Table */}

        <div className="div-dark shadow-lg rounded-xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className=" text-left text-gray-500 text-sm">
              <tr>
                <th className="p-4 w-10 text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="p-4 w-1/6">Product</th>
                <th className="p-4 w-1/6">Reviewer</th>
                <th className="p-4 w-1/3">Review</th>
                <th className="p-4 w-1/8 whitespace-nowrap">Date</th>
                <th className="p-4 w-1/8 whitespace-nowrap">Status</th>
                <th className="p-4 w-12 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b text-sm dark:border-gray-700"
                >
                  <td className="p-4 w-10 text-center align-middle">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="p-4  items-center space-x-3 text-gray-500 ">
                    <img
                      src={review.productImage}
                      alt={review.product}
                      className="w-12 h-12 rounded-md"
                    />
                    <div>
                      <p className="font-medium text-gray-500">
                        {review.product}
                      </p>
                      <p className="text-gray-500 text-xs div-text">
                        {review.brand}
                      </p>
                    </div>
                  </td>
                  <td className="p-4  items-center space-x-3 max-w-[200px]">
                    <img
                      src={review.reviewerImage}
                      alt={review.reviewer}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="truncate">
                      <p className="font-medium text-gray-500 truncate">
                        {review.reviewer}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {review.email}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 align-top max-w-[250px] break-words div-text">
                    <div className="flex items-center mb-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-medium text-gray-900 div-text">
                      {review.reviewTitle}
                    </p>
                    <p className="text-gray-500 text-xs break-words">
                      {review.reviewText}
                    </p>
                  </td>
                  <td className="p-4 text-sm text-gray-600 whitespace-nowrap div-text ">
                    {review.date}
                  </td>
                  <td className="p-4 text-sm whitespace-nowrap">
                    {review.status === "Published" ? (
                      <span className="text-green-600 flex items-center">
                        <FaCheckCircle className="mr-1" /> Published
                      </span>
                    ) : (
                      <span className="text-yellow-600 flex items-center">
                        <FaClock className="mr-1" /> Pending
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-center text-gray-500 text-lg relative">
                    {/* Three-dot icon */}

                    <div
                      className="cursor-pointer"
                      onClick={() => toggleDropdown(review.id)}
                    >
                      <FaEllipsisH />
                    </div>

                    {openDropdownIndex === review.id && (
                      <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg text-sm text-gray-700">
                        <ul className="py-1">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleViewClick(review.id)}
                          >
                            View
                          </li>
                          <li
                            className="px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                            onClick={() => {
                              handleDelete(review.id);
                            }}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end space-x-2 mt-4 p-2">
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
    </div>
  );
};

export default ECommerceManageReview;
