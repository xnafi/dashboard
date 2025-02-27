import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import UserDetails from "../../components/re-ui/UserDetails";

const UserPlans = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Tom McBride",
      number: "**** **** **** 9865",
      img: "https://i.postimg.cc/1zy59Khk/mastercard-1.png",
      expiry: "12/24",
      status: "Popular",
    },
    {
      id: 2,
      name: "Mildred Wagner",
      number: "**** **** **** 5678",
      img: "https://i.postimg.cc/vZs6Vfwz/visa-icon-1.png",
      expiry: "02/24",
      status: "",
    },
    {
      id: 3,
      name: "Lester Jennings",
      number: "**** **** **** 9424",
      img: "https://i.postimg.cc/tgr1wcZS/american-express.png",
      expiry: "08/20",
      status: "Expired",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Delete function
  const handleDelete = (cardId: any) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 dark:text-white max-w-full rounded-lg shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6  dark:bg-gray-900 dark:text-gray-200">
        {/* Left Side - User Details & Plan */}
        <div className="lg:col-span-1">
          {/* User Details */}
          <UserDetails />
        </div>

        {/* Right Side - Current Plan */}
        <div className="lg:col-span-2">
          {/* Flex Container for Plan Details & Notification */}
          <div className="mb-6 rounded-2xl bg-white shadow-md p-6 div-dark div-text flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left: Plan Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 div-text">
                Current Plan
              </h3>
              <p className="text-gray-700 font-semibold div-text">
                Your Current Plan is Basic
              </p>
              <p className="text-gray-700 mb-4 div-text">
                A simple start for everyone
              </p>
              <p className="text-gray-700 font-semibold div-text">
                Active until Dec 09, 2021
              </p>
              <p className="text-gray-700 mb-4 div-text">
                We will send you a notification upon Subscription expiration
              </p>
              <p className="text-lg font-semibold mt-2 flex items-center gap-2 div-text">
                $99 Per Month{" "}
                <span className="text-xs bg-indigo-100  text-indigo-600 px-2 py-1 rounded-full dark:text-indigo-600 dark:bg-indigo-400">
                  Popular
                </span>
              </p>
              <p className="text-gray-500 text-sm div-text">
                Standard plan for small to medium businesses
              </p>
              {/* Buttons */}
              <div className="flex gap-4 mt-4 w-full">
                <button className="bg-indigo-600 text-white  px-2 py-2 rounded-md flex-1">
                  Upgrade Plan
                </button>
                <button className="bg-red-100 text-red-600 px-2 py-2 rounded-md flex-1">
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Right: Notification Box & Progress */}
            <div className="flex-1 mt-10">
              {/* Notification Box */}
              <div className="bg-orange-100 text-orange-600 p-4 rounded-lg flex items-center gap-2">
                <MdOutlineErrorOutline className="text-xl" />
                <p className="text-sm ">
                  We need your attention! Your plan requires updates
                </p>
              </div>

              {/* Days Progress */}
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 div-text">Days</p>
                  <p className="text-gray-500 div-text">26 of 30 Days</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-indigo-500 h-2 rounded-full w-11/12"></div>
                </div>
                <p className="text-sm text-gray-500 mt-1 div-text">
                  Your plan requires update
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-gray-800 div-text">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                + Add Card
              </button>
            </div>
            {/* Add User Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
                <div className="bg-white div-dark div-text w-80 h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  >
                    ✖
                  </button>
                  <h2 className="text-xl font-semibold mb-2">Add Card</h2>
                  <p className="text-lg font-normal mb-4">
                    Enter the card details.
                  </p>

                  <div className="space-y-4">
                    <input
                      className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
                      type="text"
                      placeholder="Card Holder Full Name"
                    />
                    <input
                      className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
                      type="text"
                      placeholder="Card Number"
                    />

                    {/* Expiration Date & CVV - Side by Side */}
                    <div className="flex gap-4">
                      <input
                        className="w-1/2 p-1 border rounded div-dark div-text dark:border-gray-500"
                        type="date"
                      />
                      <input
                        className="w-1/2 p-1 border rounded div-dark div-text dark:border-gray-500"
                        type="text"
                        placeholder="CVV"
                        maxLength={4} // Restrict CVV length to 4 digits
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-4">
                    <button className="px-4 py-2 bg-indigo-500 text-white rounded">
                      Submit
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-red-300 text-red-700 dark:bg-red-900 dark:bg-transparent dark:text-red-400 rounded dark:hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Cards */}
            <div className="space-y-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="p-4 border border-dark rounded-lg flex justify-between items-center"
                >
                  <div className="flex gap-4">
                    <img src={card.img} alt={card.name} className="w-12 h-8" />
                    <div>
                      <p className="font-semibold mb-2 mt-2">
                        {card.name}
                        {card.status && (
                          <span
                            className={`text-xs px-2 py-1 rounded-md ml-2 ${
                              card.status === "Expired"
                                ? "bg-red-200 text-red-700"
                                : "bg-purple-200 text-indigo-700"
                            }`}
                          >
                            {card.status}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500 div-text">
                        {card.number}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-2 mt-2">
                      <button className="bg-purple-200 text-indigo-700 px-3 py-1 rounded-md">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(card.id)}
                        className="bg-red-200 text-red-700 px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 div-text">
                      Card expires at {card.expiry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Address Section */}
          <div className=" bg-white rounded-2xl shadow-md p-6 div-dark div-text mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Billing Address</h3>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                + Edit Address
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 div-text">
              <div>
                <p>
                  <strong>Company Name:</strong>{" "}
                  <span className="ml-2">Kelly Group</span>
                </p>
                <p>
                  <strong>Billing Email:</strong>
                  <span className="ml-8"> gertrude@gmail.com</span>
                </p>
                <p>
                  <strong>Tax ID:</strong>{" "}
                  <span className="ml-16 pl-2">TAX-875623</span>
                </p>
                <p>
                  <strong>VAT Number:</strong>{" "}
                  <span className="ml-8">SDF754K77</span>
                </p>
                <p>
                  <strong>Billing Address:</strong>{" "}
                  <span className="ml-4">100 Water Plant Avenue</span>
                </p>
              </div>

              <div className="">
                <p>
                  <strong>Contact:</strong>{" "}
                  <span className="ml-8">+1 (609) 933-44-22</span>
                </p>
                <p>
                  <strong>Country:</strong> <span className="ml-8">USA </span>
                </p>
                <p>
                  <strong>State:</strong>{" "}
                  <span className="ml-12 pl-2">Capholim</span>
                </p>
                <p>
                  <strong>Zip Code:</strong>
                  <span className="ml-8">403114</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPlans;
