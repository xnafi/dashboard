import { FaEdit, FaStar, FaGift, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const ECommerceUserOverview = () => {
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
       {/* Order Header */}
       <div className="flex justify-between items-center p-4  rounded-lg shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">Customer ID #634759</h3>
            {/* <div className="flex space-x-2">
              <span className="px-3 py-1 text-sm bg-gray-100 text-green-500 rounded">
                Paid
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 text-blue-400 rounded">
                Ready to pick
              </span>
            </div> */}
          </div>

          <p className="text-sm text-gray-500">Aug 17, 2020, 5:48 (ET)</p>
        </div>
        <div>
          <span className="px-3 py-3 text-sm bg-red-50 text-red-500 rounded">
            Delete customer
          </span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
{/* User Profile */}
<div className="bg-white rounded-xl shadow-lg p-6 w-80">
        {/* Profile Picture & Basic Info */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.postimg.cc/Tw4rMhxh/Avatar.png"
            alt="User"
            className=" w-24 h-24 "
          />
          <h2 className="text-xl font-semibold mt-2">Seth Hallam</h2>
          <p className="text-gray-500 text-sm">Customer ID #634759</p>
        </div>

          {/* Orders & Spent Section */}
        <div className="flex flex-row justify-center gap-10 my-4">
          <div className="flex flex-row items-center gap-4">
            <FaShoppingCart className="text-indigo-500 text-xl" />
            <div>
            <p className="text-lg font-semibold">184</p>
            <p className="text-gray-500 text-sm">Orders</p>
            </div>
            
          </div>
          <div className="flex flex-row items-center gap-4">
            <FaDollarSign className="text-indigo-500 text-xl" />
            <div>
            <p className="text-lg font-semibold">$8456</p>
            <p className="text-gray-500 text-sm">Spent</p>
            </div>
           
          </div>
        </div>
        <div>
            <h2 className="text-lg font-semibold ">Details</h2>
        </div>

        <hr className="my-4" />
          
          {/* User Details */}
        <div className="text-sm ">
          <p className="mb-1">
            <span className="font-semibold">Username:</span> shal.lamb
          </p>
          <p className="mb-1">
            <span className="font-semibold">Billing Email:</span>{" "}
            shallamb@gmail.com
          </p>
          <p className="mb-1">
            <span className="font-semibold">Status:</span>{" "}
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-medium">
              Active
            </span>
          </p>
          <p className="mb-1">
            <span className="font-semibold">Contact:</span> +1 (234) 464-0600
          </p>
          <p className="mb-1">
            <span className="font-semibold">Country:</span> Peru
          </p>
        </div>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg w-full flex items-center justify-center">
            <FaEdit className="mr-2" /> Edit Details
          </button>
         
          
        </div>
        <div>
              {/* Upgrade to Premium Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 w-72 mt-6 text-white relative">
        <h3 className="text-lg font-semibold">Upgrade to premium</h3>
        <p className="text-sm mt-1">
          Upgrade customer to <br /> premium membership to <br /> access pro features.
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
        </div>
        
        

        {/* Main Content (Right Section) */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {/* Account Balance */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center">
              <FaDollarSign className="text-indigo-500 text-2xl" />
              <h3 className="ml-2 text-lg font-semibold">Account Balance</h3>
            </div>
            <p className="text-indigo-600 text-xl font-semibold mt-2">$7480</p>
            <p className="text-gray-500 text-sm">
              Account balance for next purchase
            </p>
          </div>

          {/* Loyalty Program */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center">
              <FaGift className="text-green-500 text-2xl" />
              <h3 className="ml-2 text-lg font-semibold">Loyalty Program</h3>
            </div>
            <p className="text-green-500 font-semibold mt-2">Platinum Member</p>
            <p className="text-gray-500 text-sm">
              3000 points to next tier
            </p>
          </div>

          {/* Wishlist */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 text-2xl" />
              <h3 className="ml-2 text-lg font-semibold">Wishlist</h3>
            </div>
            <p className="text-yellow-500 font-semibold mt-2">15 Items</p>
            <p className="text-gray-500 text-sm">
              Receive notifications when items go on sale
            </p>
          </div>

          {/* Coupons */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center">
              <FaGift className="text-blue-500 text-2xl" />
              <h3 className="ml-2 text-lg font-semibold">Coupons</h3>
            </div>
            <p className="text-blue-500 font-semibold mt-2">21 Coupons</p>
            <p className="text-gray-500 text-sm">
              Use coupon on next purchase
            </p>
          </div>

          {/* Orders Placed */}
          <div className="bg-white rounded-xl shadow-lg p-4 col-span-2">
            <h3 className="text-lg font-semibold mb-2">Orders Placed</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-2">ORDER</th>
                    <th className="p-2">DATE</th>
                    <th className="p-2">STATUS</th>
                    <th className="p-2">SPENT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "#4910", date: "Aug 17, 2020", status: "Ready to Pickup", spent: "$256.39", statusClass: "text-green-600" },
                    { id: "#8734", date: "July 29, 2020", status: "Dispatched", spent: "$1,421.47", statusClass: "text-yellow-600" },
                    { id: "#3479", date: "July 11, 2020", status: "Delivered", spent: "$3,535.46", statusClass: "text-blue-600" },
                    { id: "#1298", date: "June 27, 2020", status: "Out for Delivery", spent: "$1,035.02", statusClass: "text-purple-600" },
                    { id: "#9038", date: "June 12, 2020", status: "Ready to Pickup", spent: "$68.53", statusClass: "text-green-600" },
                  ].map((order, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{order.id}</td>
                      <td className="p-2">{order.date}</td>
                      <td className={`p-2 font-semibold ${order.statusClass}`}>{order.status}</td>
                      <td className="p-2">{order.spent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerceUserOverview;
