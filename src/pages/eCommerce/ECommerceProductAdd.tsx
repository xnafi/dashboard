import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Switch } from "@headlessui/react";
import { FaBoxOpen, FaTruck, FaGlobe, FaTags, FaSlidersH } from "react-icons/fa";


const ECommerceProductAdd = () => {
  const [enabled, setEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("Restock");

 
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
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-m">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <div>
            <h1 className="text-xl font-semibold">Add a new product</h1>
            <p className="text-sm ">Orders placed across your store</p>
            </div>
          
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded">Discard</button>
            <button className="px-4 py-2 bg-gray-300 rounded text-indigo-500">Save Draft</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">
              Publish Product
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            {/* Product Information */}
<div className="bg-gray-50 p-6 rounded-lg shadow-sm dark:bg-gray-800">
  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
    Product information
  </h2>

  {/* Name Input */}
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Name
    </label>
    <input
      type="text"
      placeholder="Product Title"
      className="w-full mt-1 p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
    />
  </div>

  {/* SKU & Barcode Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        SKU
      </label>
      <input
        type="text"
        placeholder="SKU"
        className="w-full mt-1 p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Barcode
      </label>
      <input
        type="text"
        placeholder="0123-4567"
        className="w-full mt-1 p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
    </div>
  </div>

  {/* Description */}
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Description (Optional)
    </label>
    <div className="mt-1 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b dark:border-gray-600">
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          B
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          I
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          U
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          [|]
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded  ">
          ≡
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          ≡
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
          ≡
        </button>
      </div>
      {/* Text Area */}
      <textarea
        className="w-full p-2 outline-none resize-none dark:bg-gray-700 dark:text-white"
        rows={3}
        placeholder="Keep your account secure with authentication step."
      ></textarea>
    </div>
  </div>
</div>
                 {/* Product Image */}

            {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Product Image</h2>
        <button className="text-indigo-500 text-sm font-medium hover:underline">
          Add media from URL
        </button>
      </div>

      {/* Upload Box */}
      <div
        className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center cursor-pointer"
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Drag and drop your image here
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">or</p>
            <label className="mt-2 px-4 py-2 bg-gray-100 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded cursor-pointer">
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

            {/* Variants */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-4">
              <h2 className="text-lg font-semibold mb-2">Variants</h2>
              <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">options</h2>
              <div className="flex space-x-2">
                
                <input
                  type="text"
                  placeholder="Size"
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Enter size"
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 ">+ Add Another Option</button>
            </div>
            </div>

            {/* Inventory */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm dark:bg-gray-800 mt-4">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Inventory</h2>

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
                  ? "bg-gray-200 text-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-2/3 pl-4">
          <h3 className="text-sm font-normal text-gray-900 dark:text-white">Options</h3>
          <div>
          <h2 className="text-sm font-normal mt-4 text-gray-700 dark:text-gray-300 block mb-2">Add to stock</h2>
          
          <div className="mt-2 flex space-x-2">
            <input
              type="number"
              placeholder="Add Quantity"
              className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              Confirm
            </button>
          </div>
          </div>

          {/* Stock Details */}
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
            <span className="block mb-2">Product in stock now: 8</span>
            <span className="block mb-2">Product in transit: 62</span>
            <span className="block mb-2">Last time restocked: 24th June, 2023</span>
            <span className="block mb-2">Total stock over lifetime: 2,430</span>
          </p>
        </div>
      </div>
    </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Pricing */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-2">Pricing</h2>
              <input
                type="text"
                placeholder="Base Price"
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                placeholder="Discounted Price"
                className="w-full p-2 border rounded mt-2"
              />
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
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-4">
              <h2 className="text-lg font-semibold mb-2">Organize</h2>
              <select className="w-full p-2 border rounded mt-2">
                <option>Select Vendor</option>
              </select>
              <div className="flex space-x-2 mt-2">
                <select className="w-full p-2 border rounded">
                  <option>Select Category</option>
                </select>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">+</button>
              </div>
              <select className="w-full p-2 border rounded mt-2">
                <option>Select Collection</option>
              </select>
              <select className="w-full p-2 border rounded mt-2">
                <option>Published</option>
              </select>
              <input
                type="text"
                placeholder="Enter Tags"
                className="w-full p-2 border rounded mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceProductAdd;
