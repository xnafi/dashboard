import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const categories = [
  {
    id: 1,
    name: "Gaming Accessories",
    description: "Keyboards, mice, headsets, and more for gamers.",
    products: 450,
    earnings: "$95,786",
    image: "https://i.postimg.cc/mZyT7Gnd/gaming-keyboard.png",
  },
  {
    id: 2,
    name: "Fitness & Gym Equipment",
    description: "Dumbbells, treadmills, yoga mats, and resistance bands.",
    products: 1200,
    earnings: "$150,230",
    image: "https://i.postimg.cc/RZMK0CZb/dumbbells.png",
  },
  {
    id: 3,
    name: "Smart Home Devices",
    description: "Smart bulbs, security cameras, and voice assistants.",
    products: 670,
    earnings: "$78,900",
    image: "https://i.postimg.cc/zfj9y5FC/smart-home.png",
  },
];

const ECommerceCategoryList = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md ">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Category
        </button>
      </div>

      {/* Category Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Categories</th>
              <th className="p-3 text-center">Total Products</th>
              <th className="p-3 text-center">Total Earnings</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center space-x-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{category.name}</p>
                    <p className="text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </td>
                <td className="p-3 text-center">
                  {category.products.toLocaleString()}
                </td>
                <td className="p-3 text-center">{category.earnings}</td>
                <td className="p-3 text-center flex items-center justify-center space-x-2">
                  <button className="text-gray-600 hover:text-blue-600">
                    <FaEdit />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 flex items-center space-x-1 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          <FaChevronLeft />
          <span>Prev</span>
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 flex items-center space-x-1 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          <span>Next</span>
          <FaChevronRight />
        </button>
      </div>
      </div>

      {/* Right-side Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-96 bg-white dark:bg-gray-800 shadow-xl p-6 relative transform transition-transform ease-in-out translate-x-0">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <AiOutlineClose size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  placeholder="Enter category title"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Slug</label>
                <input
                  type="text"
                  placeholder="Enter slug"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Attachment</label>
                <input type="file" className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Parent Category
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Select parent category</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Enter category description..."
                  className="w-full border rounded-lg px-3 py-2"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Select category status
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Select category status</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-200 text-red-600 px-4 py-2 rounded-lg"
                >
                  Discard
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ECommerceCategoryList;
