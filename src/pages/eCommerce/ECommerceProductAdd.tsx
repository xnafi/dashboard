import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Switch } from "@headlessui/react";
import {
  FaBoxOpen,
  FaTruck,
  FaGlobe,
  FaTags,
  FaSlidersH,
} from "react-icons/fa";

const ECommerceProductAdd = () => {
  const [enabled, setEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("Restock");
  const variantOptions = ["Size", "Color", "Weight"];
  const [options, setOptions] = useState([{ type: "Size", value: "" }]);

  const addOption = () => {
    setOptions([...options, { type: "Size", value: "" }]);
  };

  const updateOptionType = (index: number, newType: string) => {
    setOptions((prev) =>
      prev.map((opt, i) => (i === index ? { ...opt, type: newType } : opt))
    );
  };

  const updateOptionValue = (index: number, newValue: string) => {
    setOptions((prev) =>
      prev.map((opt, i) => (i === index ? { ...opt, value: newValue } : opt))
    );
  };

  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900  max-w-full rounded-lg shadow-m">
      <div className="max-w-6xl mx-auto bg-white div-text dark:bg-gray-900 p-6 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">Add a new product</h1>
            <p className="text-sm ">Orders placed across your store</p>
          </div>

          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded div-dark div-text">
              Discard
            </button>
            <button className="px-4 py-2 bg-gray-300 rounded text-indigo-500 dark:text-indigo-500 div-dark ">
              Save Draft
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">
              Publish Product
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="lg:col-span-2">
            {/* Product Information */}
            <div className=" p-6 rounded-lg shadow-lg div-dark">
              <h2 className="text-lg font-semibold text-gray-900 div-text div-dark">
                Product information
              </h2>

              {/* Name Input */}
              <div className="mt-4">
                <label className="block text-sm font-medium div-text div-dark  div-text div-dark">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Product Title"
                  className="w-full mt-1 p-2 border rounded-lg bg-white div-text div-dark  dark:border-gray-600"
                />
              </div>

              {/* SKU & Barcode Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium div-text div-dark  div-text">
                    SKU
                  </label>
                  <input
                    type="text"
                    placeholder="SKU"
                    className="w-full mt-1 p-2 border rounded-lg bg-white  div-text div-dark  dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium div-text div-dark  div-text">
                    Barcode
                  </label>
                  <input
                    type="text"
                    placeholder="0123-4567"
                    className="w-full mt-1 p-2 border rounded-lg bg-white div-text div-dark   dark:border-gray-600"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="block text-sm font-medium div-text div-dark  div-text">
                  Description (Optional)
                </label>
                <div className="mt-1 border rounded-lg bg-white div-text div-dark   dark:border-gray-600">
                  {/* Toolbar */}
                  <div className="flex items-center gap-2 p-2 border-b dark:border-gray-600">
                    <button className="p-1 text-gray-600 div-text div-dark hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      B
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      I
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      U
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      [|]
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded  ">
                      ≡
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      ≡
                    </button>
                    <button className="p-1 text-gray-600 div-text hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      ≡
                    </button>
                  </div>
                  {/* Text Area */}
                  <textarea
                    className="w-full p-2 outline-none resize-none div-text div-dark  "
                    rows={3}
                    placeholder="Keep your account secure with authentication step."
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Product Image */}

            {/* Header */}
            <div className="p-6 rounded-lg shadow-lg div-dark mt-4">
              <div className="flex justify-between items-center mb-2  ">
                <h2 className="text-lg font-semibold text-gray-900 div-text">
                  Product Image
                </h2>
                <button className="text-indigo-500 dark:text-indigo-500 text-sm font-medium hover:underline">
                  Add media from URL
                </button>
              </div>

              {/* Upload Box */}
              <div
                className="border-dashed border-2 border-gray-300 border-dark  rounded-lg p-6 text-center cursor-pointer   shadow-sm div-dark"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className="mx-auto h-40 object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <FiUpload className="mx-auto text-3xl text-gray-500" />
                    <p className="mt-2 text-gray-600 div-text">
                      Drag and drop your image here
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">or</p>
                    <label className="mt-2 px-4 py-2 bg-gray-100 dark:bg-indigo-500 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 hover:text-white rounded  cursor-pointer">
                      Browse Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            {/* Variants */}
            <div className="p-4 rounded-lg shadow-lg mt-4 div-text div-dark">
      <h2 className="text-lg font-semibold mb-2">Variants</h2>
      <div>
        <h2 className="text-sm font-medium div-text block mb-2">Options</h2>
        {options.map((option, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <select
              value={option.type}
              onChange={(e) => updateOptionType(index, e.target.value)}
              className="w-1/2 p-2 border border-dark  rounded div-text div-dark"
            >
              {variantOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={option.value}
              onChange={(e) => updateOptionValue(index, e.target.value)}
              placeholder={`Enter ${option.type.toLowerCase()}`}
              className="w-1/2 p-2 border border-dark input-field rounded div-text div-dark"
            />
          </div>
        ))}
        <button
          onClick={addOption}
          className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          + Add Another Option
        </button>
      </div>
    </div>
            {/* Inventory */}
            <div className="p-4 rounded-lg shadow-lg div-dark mt-4">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 div-text">
        Inventory
      </h2>

      {/* Sidebar Navigation */}
      <div className="flex">
        <div className="w-1/3 space-y-2">
          {[
            { name: "Restock", icon: <FaBoxOpen /> },
            { name: "Shipping", icon: <FaTruck /> },
            { name: "Global Delivery", icon: <FaGlobe /> },
            { name: "Attributes", icon: <FaTags /> },
            { name: "Advanced", icon: <FaSlidersH /> },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded text-left transition ${
                activeTab === tab.name
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-2/3 pl-4">
        {activeTab === "Restock" && (
  <div className="p-6 bg-white div-dark rounded-lg ">
    <h3 className="text-lg font-semibold text-gray-900 div-text">
      Restock
    </h3>

    <div className="mt-6 space-y-4">
      <div className="flex items-center  space-x-2">
      {/* Quantity Input */}
      <label className="block">
        <span className="text-gray-700 div-text font-medium">
          Add to Stock
        </span>
        <input
          type="number"
          placeholder="Quantity"
          className="block w-full mt-2 p-2 border border-dark  rounded div-dark div-text"
        />
      </label>

      {/* Confirm Button */}
      <button className=" bg-indigo-600 mt-8 w-32 text-white py-2 rounded-md hover:bg-indigo-700 transition">
        Confirm
      </button>
      </div>
      {/* Stock Information */}
      <div className="text-sm text-gray-700 div-text space-y-1">
        <p>Product in stock now: <span className="font-medium">54</span></p>
        <p>Product in transit: <span className="font-medium">390</span></p>
        <p>Last time restocked: <span className="font-medium">24th June, 2022</span></p>
        <p>Total stock over lifetime: <span className="font-medium">2,430</span></p>
      </div>
    </div>
  </div>
)}


          {activeTab === "Shipping" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 div-text">
                Shipping Type
              </h3>
              <div className="mt-4 space-y-4">
                <label className="flex items-start space-x-2">
                  <input type="radio" name="shipping" className="mt-1" />
                  <div>
                    <span className="font-medium">Fulfilled by Seller</span>
                    <p className="text-sm text-gray-600">
                      You’ll be responsible for product delivery. Any damage or
                      delay during shipping may cost you a damage fee.
                    </p>
                  </div>
                </label>

                <label className="flex items-start space-x-2">
                  <input type="radio" name="shipping" className="mt-1" checked />
                  <div>
                    <span className="font-medium">
                      Fulfilled by Company Name
                    </span>
                    <p className="text-sm text-gray-600">
                      Your product, our responsibility. For a small fee, we
                      will handle the delivery process for you.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "Global Delivery" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 div-text">
                Global Delivery
              </h3>
              <div className="mt-4 space-y-4">
                <label className="flex items-start space-x-2">
                  <input type="radio" name="delivery" className="mt-1" checked />
                  <div>
                    <span className="font-medium">Worldwide Delivery</span>
                    <p className="text-sm text-gray-600">
                      Only available with Shipping method:{" "}
                      <span className="text-indigo-600 cursor-pointer">
                        Fulfilled by Company Name
                      </span>
                    </p>
                  </div>
                </label>

                <label className="flex items-start space-x-2">
                  <input type="radio" name="delivery" className="mt-1" />
                  <div>
                    <span className="font-medium">Selected Countries</span>
                    <input
                      type="text"
                      placeholder="USA"
                      className="block w-full mt-2 p-2 border rounded border-dark div-dark div-text"
                    />
                  </div>
                </label>

                <label className="flex items-start space-x-2">
                  <input type="radio" name="delivery" className="mt-1" checked />
                  <div>
                    <span className="font-medium">Local Delivery</span>
                    <p className="text-sm text-gray-600">
                      Deliver to your country of residence:{" "}
                      <span className="text-indigo-600 cursor-pointer">
                        change profile address
                      </span>
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "Attributes" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 div-text">
                Attributes
              </h3>
              <div className="mt-4 space-y-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>Fragile Product</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" checked />
                  <span>Biodegradable</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <div>
                    <span>Frozen Product</span>
                    <input
                      type="text"
                      placeholder="40 C"
                      className="block w-full mt-2 p-2 border border-dark div-text rounded div-dark"
                    />
                  </div>
                </label>

                <label className="flex items-center space-x-2">
                  <input type="checkbox" checked />
                  <div>
                    <span>Expiry Date of Product</span>
                    <input
                      type="date"
                      className="block w-full mt-2 p-2 border border-dark  rounded div-dark"
                      defaultValue="2025-06-14"
                    />
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "Advanced" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 div-text">
                Advanced
              </h3>
              <div className="mt-4 space-y-4">
                <label className="block">
                  <span className="font-medium">Product ID Type</span>
                  <select className="block w-full mt-2 p-2 border border-dark div-text rounded div-dark">
                    <option>ISBN</option>
                    <option>UPC</option>
                    <option>EAN</option>
                    <option>JAN</option>
                  </select>
                </label>

                <label className="block">
                  <span className="font-medium">Flexible Product ID</span>
                  <input
                    type="text"
                    placeholder="Enter ID"
                    className="block w-full mt-2 p-2 border border-dark div-text rounded div-dark"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Pricing */}
            <div className="p-4 rounded-lg shadow-lg div-text div-dark ">
              <h2 className="text-lg font-semibold mb-2">Pricing</h2>
              <div>
                <div>
                  <h2 className="text-sm font-medium div-text div-dark div-text div-text block mt-2">
                    Base price
                  </h2>
                  <input
                    type="text"
                    placeholder="Base Price"
                    className="w-full p-2 border rounded div-text div-dark border-dark"
                  />
                </div>
                <div>
                  <h2 className="text-sm font-medium div-text div-dark  div-text block mt-2">
                    Discounted Price
                  </h2>
                  <input
                    type="text"
                    placeholder="Discounted Price"
                    className="w-full p-2 border border-dark rounded div-text div-dark"
                  />
                </div>
              </div>

              <div className="flex items-center mt-2">
                <input type="checkbox" id="tax" className="mr-2" />
                <label htmlFor="tax">Charge tax on this product</label>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>In stock</span>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-indigo-600" : "bg-gray-300"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </div>

            {/* Organize */}
            <div className=" p-4 rounded-lg shadow-lg mt-4 div-text div-dark ">
              <h2 className="text-lg font-semibold mb-2">Organize</h2>
              <select className="w-full p-2 border rounded mt-2 div-text div-dark border-dark">
                <option>Select Vendor</option>
              </select>
              <div className="flex space-x-2 mt-2">
                <select className="w-full p-2 border rounded div-text div-dark border-dark">
                  <option>Select Category</option>
                </select>
                <div className="bg-indigo-800">
                <button className="px-4 py-2  div-text div-dark dark:bg-indigo-300  text-lg font-semibold rounded">
                  +
                </button>
                </div>
                
              </div>
              <select className="w-full p-2 border rounded mt-2 div-text div-dark border-dark">
                <option>Select Collection</option>
              </select>
              <select className="w-full p-2 border rounded mt-2 div-text div-dark border-dark">
                <option>Published</option>
              </select>
              <input
                type="text"
                placeholder="Enter Tags"
                className="w-full p-2 border rounded mt-2 div-text div-dark border-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceProductAdd;
