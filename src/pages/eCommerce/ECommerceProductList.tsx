import { useEffect, useState } from "react";
import { FaEdit, FaEllipsisV } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import productsData from "../../data/products.json";
import { FiDownload } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  stock: boolean;
  sku: number;
  price: number;
  qty: number;
  status: string;
  image: string;
}

const ITEMS_PER_PAGE = 7;

const ECommerceProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Toggle stock status
  const toggleStock = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, stock: !product.stock } : product
      )
    );
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    return (
      (selectedStatus === "" || product.status === selectedStatus) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedStock === "" ||
        (selectedStock === "In Stock" ? product.stock : !product.stock)) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
       {/* Stats Cards Section */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 dark:bg-gray-800">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
          <span className="text-gray-500 text-sm">In-Store Sales</span>
          <span className="text-2xl font-semibold">$5,345</span>
          <div className="flex items-center gap-1">
          <span className="text-gray-500 text-sm">5k orders</span>
          <span className="text-green-600 bg-green-100 px-2 py-1 rounded-md text-xs mt-1">
            +5.7%
          </span>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
          <span className="text-gray-500 text-sm">Website Sales</span>
          <span className="text-2xl font-semibold">$74,347</span>
          <div className="flex items-center gap-1">
          <span className="text-gray-500 text-sm">21k orders</span>
          <span className="text-green-600 bg-green-100 px-2 py-1 rounded-md text-xs mt-1">
            +12.4%
          </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
          <span className="text-gray-500 text-sm">Discount</span>
          <span className="text-2xl font-semibold">$14,235</span>
          <span className="text-gray-500 text-sm">6k orders</span>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
          <span className="text-gray-500 text-sm">Affiliate</span>
          <span className="text-2xl font-semibold">$8,345</span>
          <div className="flex items-center gap-1">
          <span className="text-gray-500 text-sm">150 orders</span>
          <span className="text-red-600 bg-red-100 px-2 py-1 rounded-md text-xs mt-1">
            -3.5%
          </span>
        </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="div-dark">
      <div className="mb-4 bg-white p-4 rounded-md shadow-sm div-dark div-text">
        <h3 className="text-gray-500 font-semibold mb-2">Filter</h3>

        {/* Status, Category, Stock - In One Line */}
        <div className="flex gap-7 flex-wrap">
          <select
            className="border p-2 rounded-md w-80 div-dark div-text dark:border-gray-700"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Publish">Publish</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            className="border p-2 rounded-md w-80 div-dark div-text dark:border-gray-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <select
            className="border p-2 rounded-md w-80  div-dark div-text dark:border-gray-700"
            value={selectedStock}
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            <option value="">Select Stock</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Search Bar & Actions Row */}
        <div className="mt-4 flex flex-wrap justify-between items-center ">
          <input
            type="text"
            placeholder="Search Product"
            className="border p-2 rounded-md w-80 div-dark div-text dark:border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex items-center gap-3">
            <select className="border p-2 rounded-md div-dark div-text dark:border-gray-700">
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <button className="bg-gray-200 text-black px-4 py-2 rounded-md flex items-center gap-2 div-dark div-text border dark:border-gray-700">
  <FiDownload className="text-gray-600" /> Export
</button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
              + Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 div-dark div-text dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="text-left">
              <th className="p-3 border dark:border-gray-700">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-3 border dark:border-gray-700">Product</th>
              <th className="p-3 border dark:border-gray-700">Category</th>
              <th className="p-3 border dark:border-gray-700">Stock</th>
              <th className="p-3 border dark:border-gray-700">SKU</th>
              <th className="p-3 border dark:border-gray-700">Price</th>
              <th className="p-3 border dark:border-gray-700">Qty</th>
              <th className="p-3 border dark:border-gray-700">Status</th>
              <th className="p-3 border dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr
                key={product.id}
                className="border dark:border-gray-700 hover:bg-indigo-100 transition"
              >
                <td className="p-3 border dark:border-gray-700">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-md"
                  />
                  <span>{product.name}</span>
                </td>
                <td className="p-3 border dark:border-gray-700">{product.category}</td>
                <td
  className="p-3  cursor-pointer flex items-center justify-between"
  onClick={() => toggleStock(product.id)}
>
  {product.stock ? (
    <>
      
      <BsToggleOn className="text-indigo-500 " />
    </>
  ) : (
    <>
      
      <BsToggleOff className="text-red-500" />
    </>
  )}
</td>
                <td className="p-3 border dark:border-gray-700">{product.sku}</td>
                <td className="p-3 border dark:border-gray-700">${product.price}</td>
                <td className="p-3 border dark:border-gray-700">{product.qty}</td>
                <td className="p-3 border dark:border-gray-700">{product.status}</td>
                <td className="p-3 border dark:border-gray-700">
                  <button className="text-indigo-500 hover:text-indigo-700">
                    <div className="flex items-center gap-2">
                      <FaEdit />
                      <FaEllipsisV />
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 p-3">
        <p className="text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
          {filteredProducts.length} entries
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border dark:border-gray-700 ${
              currentPage === 1 ? "bg-gray-300 div-text div-dark" : "bg-white hover:bg-gray-200"
            }`}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md border dark:border-gray-700 ${
                currentPage === index + 1
                  ? "bg-indigo-500 text-white "
                  : "bg-white hover:bg-indigo-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border dark:border-gray-700 ${
              currentPage === totalPages
                ? "bg-gray-300 div-text div-dark"
                : "bg-white hover:bg-gray-200 div-text div-dark"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ECommerceProductList;
