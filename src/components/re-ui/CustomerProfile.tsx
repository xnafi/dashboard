import { FaEdit, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const CustomerProfile = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 div-text div-dark border-dark">
        <div className="flex flex-col items-center">
          <img
            src="https://i.postimg.cc/Tw4rMhxh/Avatar.png"
            alt="User"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-semibold mt-2 text-gray-600 div-text">
            Seth Hallam
          </h2>
          <p className="text-gray-500 text-sm div-text">Customer ID #634759</p>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 flex items-center justify-center">
              <FaShoppingCart className="text-indigo-500 text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-600 div-text">184</p>
              <p className="text-gray-500 text-sm div-text">Orders</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2 flex items-center justify-center">
              <FaDollarSign className="text-indigo-500 text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-600 div-text">$8456</p>
              <p className="text-gray-500 text-sm div-text">Spent</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-600 div-text">Details</h2>
        <hr className="my-4 border-dark" />

        <div className="text-sm">
          <p className="mb-1 text-gray-600 div-text">
            <strong>Username:</strong> shal.lamb
          </p>
          <p className="mb-1 text-gray-600 div-text">
            <strong>Billing Email:</strong> shallamb@gmail.com
          </p>
          <p className="mb-1 text-gray-600 div-text">
            <strong>Status:</strong>{" "}
            <span className="bg-green-100 dark:bg-green-300 text-green-600 px-2 py-1 rounded-lg text-xs font-medium">
              Active
            </span>
          </p>
          <p className="mb-1 text-gray-600 div-text">
            <strong>Contact:</strong> +1 (234) 464-0600
          </p>
          <p className="mb-1 text-gray-600 div-text">
            <strong>Country:</strong> Peru
          </p>
        </div>

        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center">
          <FaEdit className="mr-2" /> Edit Details
        </button>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 w-72 mt-6 text-white relative">
        <h3 className="text-lg font-semibold">Upgrade to premium</h3>
        <p className="text-sm mt-1">
          Upgrade customer to <br /> premium membership to <br /> access pro
          features.
        </p>
        <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg w-full font-semibold">
          Upgrade To Premium
        </button>
        <img
          src="https://i.postimg.cc/jdhW0Ltc/3d-space-rocket-with-smoke-23-2148938939-2.png"
          alt="Rocket"
          className="absolute -right-0 -top-0 w-28"
        />
      </div>
    </div>
  );
};

export default CustomerProfile;
