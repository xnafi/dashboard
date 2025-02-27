import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaClock, FaEllipsisH } from "react-icons/fa";

import reviewsData from "../../data/reviews.json";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ReviewStatistics from "../../components/re-ui/ReviewStatistics";
import ReviewSearchFilter from "../../components/re-ui/ReviewSearchFilter";
import ReviewStatisticTwo from "../../components/re-ui/ReviewStatisticTwo";

const ECommerceManageReview = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const filteredReviews = reviews.filter((review) =>
    review.reviewer.toLowerCase().includes(search.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  // const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/e-commerce-order-details`);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(
      index !== undefined && index === openDropdownIndex ? null : index
    );
  };

  const handleDelete = (reviewId: number) => {
    console.log("Deleting Review ID:", reviewId);

    const updatedReviews = [...reviews];
    const index = updatedReviews.findIndex((review) => review.id === reviewId);

    if (index !== -1) {
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
    }

    setOpenDropdownIndex(null);
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Top Section - Stats */}

      <div className="grid grid-cols-2 gap-6 mb-6">
        <ReviewStatistics />

        {/* Review Statistics two*/}
        <ReviewStatisticTwo />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4">
        {/* Search Filter */}
        <ReviewSearchFilter search={search} setSearch={setSearch} />

        {/* Review Table */}

        <div className="div-dark shadow-lg rounded-xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className=" text-left text-gray-500 text-sm">
              <tr>
                <th className="p-4 w-10 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectAll}
                    onChange={() => {
                      setSelectAll(!selectAll);
                      setReviews((prevReviews) =>
                        prevReviews.map((r) => ({ ...r, checked: !selectAll }))
                      );
                    }}
                  />
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
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={review.checked || false}
                      onChange={() => {
                        setReviews((prevReviews) =>
                          prevReviews.map((r) =>
                            r.id === review.id
                              ? { ...r, checked: !r.checked }
                              : r
                          )
                        );
                      }}
                    />
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
                            onClick={() => handleViewClick()}
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
