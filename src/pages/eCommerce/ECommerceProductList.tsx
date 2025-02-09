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
      {/* Filter Section */}
      <div className="mb-4 bg-white p-4 rounded-md shadow-sm">
        <h3 className="text-gray-500 font-semibold mb-2">Filter</h3>

        {/* Status, Category, Stock - In One Line */}
        <div className="flex gap-4 flex-wrap">
          <select
            className="border p-2 rounded-md w-80"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Publish">Publish</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            className="border p-2 rounded-md w-80"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <select
            className="border p-2 rounded-md w-80"
            value={selectedStock}
            onChange={(e) => setSelectedStock(e.target.value)}
          >
            <option value="">Select Stock</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Search Bar & Actions Row */}
        <div className="mt-4 flex flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder="Search Product"
            className="border p-2 rounded-md w-80"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex items-center gap-3">
            <select className="border p-2 rounded-md">
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <button className="bg-gray-200 text-black px-4 py-2 rounded-md flex items-center gap-2">
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
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 border">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-3 border">Product</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Stock</th>
              <th className="p-3 border">SKU</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Qty</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr
                key={product.id}
                className="border hover:bg-gray-100 transition"
              >
                <td className="p-3 border">
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
                <td className="p-3 border">{product.category}</td>
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
                <td className="p-3 border">{product.sku}</td>
                <td className="p-3 border">${product.price}</td>
                <td className="p-3 border">{product.qty}</td>
                <td className="p-3 border">{product.status}</td>
                <td className="p-3 border">
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
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1 ? "bg-gray-300" : "bg-white hover:bg-gray-200"
            }`}
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === index + 1
                  ? "bg-indigo-500 text-white"
                  : "bg-white hover:bg-gray-200"
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
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceProductList;
