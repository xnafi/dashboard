import { useState } from "react";
import {  FiMoreVertical } from "react-icons/fi";
import { FaEdit, } from "react-icons/fa";

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
  {
    id: 4,
    name: "Automobile Accessories",
    description: "Car chargers, seat covers, and GPS devices.",
    products: 920,
    earnings: "$60,450",
    image: "https://i.postimg.cc/VN8jV2pH/car-accessories.png",
  },
  {
    id: 5,
    name: "Musical Instruments",
    description: "Guitars, pianos, violins, and percussion instruments.",
    products: 380,
    earnings: "$40,780",
    image: "https://i.postimg.cc/zG6JhVRb/guitar.png",
  },
  {
    id: 6,
    name: "Camping & Outdoor Gear",
    description: "Tents, sleeping bags, backpacks, and survival tools.",
    products: 520,
    earnings: "$85,640",
    image: "https://i.postimg.cc/DZ9F0zwq/tent.png",
  },
];

const ECommerceCategoryList = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const displayedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/3"
        />
         <div className="flex items-center gap-3">
            <select className="border p-2 rounded-md">
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          + Add Category
        </button>

      </div>
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
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredCategories.length)} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredCategories.length)} of {filteredCategories.length} entries
        </p>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 border rounded-lg ${currentPage === 1 ? "opacity-50" : ""}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            «
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`px-3 py-1 border rounded-lg ${
              currentPage === totalPages ? "opacity-50" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceCategoryList;
