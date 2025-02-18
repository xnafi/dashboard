import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaClock, FaEllipsisH, FaSearch,  } from "react-icons/fa";
import {  FiDownload } from "react-icons/fi";
import reviewsData from "../../data/reviews.json"; // Adjust path as needed

const ECommerceManageReview = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  const filteredReviews = reviews.filter((review) =>
    review.reviewer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Top Section - Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow-lg p-4 rounded-xl">
          <h2 className="text-xl font-semibold flex items-center">
            <FaStar className="text-yellow-400 mr-2" /> 4.89
          </h2>
          <p className="text-gray-500">Total 187 reviews</p>
          <p className="text-blue-500 mt-2">+5 This week</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-xl">
          <h2 className="text-lg font-semibold">Reviews Statistics</h2>
          <p className="text-green-500">+8.4% New Reviews</p>
          <p className="text-gray-500">87% Positive Reviews</p>
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
                  <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800">
                    <option value="7">7</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>

                  <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800">
                    <option value="7">All</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
        
                  <button className="bg-gray-200 text-black px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <FiDownload className="text-gray-600 " /> Export
                  </button>
                 
                </div>

        
      </div>

     
      {/* Review Table */}
      
      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
  <table className="w-full border-collapse">
    <thead className=" text-left text-gray-700 text-sm">
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
        <tr key={review.id} className="border-b text-sm">
          <td className="p-4 w-10 text-center align-middle">
            <input type="checkbox" className="w-4 h-4" />
          </td>
          <td className="p-4  items-center space-x-3">
            <img src={review.productImage} alt={review.product} className="w-12 h-12 rounded-md" />
            <div>
              <p className="font-medium text-gray-900">{review.product}</p>
              <p className="text-gray-500 text-xs">{review.brand}</p>
            </div>
          </td>
          <td className="p-4  items-center space-x-3 max-w-[200px]">
            <img src={review.reviewerImage} alt={review.reviewer} className="w-10 h-10 rounded-full" />
            <div className="truncate">
              <p className="font-medium text-gray-900 truncate">{review.reviewer}</p>
              <p className="text-gray-500 text-xs truncate">{review.email}</p>
            </div>
          </td>
          <td className="p-4 align-top max-w-[250px] break-words">
            <div className="flex items-center mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={`text-sm ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <p className="font-medium text-gray-900">{review.reviewTitle}</p>
            <p className="text-gray-500 text-xs break-words">{review.reviewText}</p>
          </td>
          <td className="p-4 text-sm text-gray-600 whitespace-nowrap">{review.date}</td>
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
          <td className="p-4 text-center text-gray-500 text-lg cursor-pointer">
            <FaEllipsisH />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




      {/* Pagination */}
      <div className="flex justify-between items-center p-4">
        <span className="text-gray-500">Showing 1-10 of 100 entries</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md">1</button>
          <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default ECommerceManageReview;
