import { FaStar } from "react-icons/fa";

const ReviewStatistics = () => {
  return (
    <div className="flex items-center text-2xl font-bold bg-white p-4 div-dark div-text">
      {/* Left Section */}
      <div className="flex-1">
        <div className="flex items-center text-2xl font-bold text-indigo-500">
          4.89 <FaStar className="text-indigo-500 ml-2" />
        </div>
        <p className="font-semibold text-sm text-gray-700 mt-1 div-text">
          Total 187 reviews
        </p>
        <p className="text-gray-500 text-sm font-normal mt-2 div-text">
          All reviews are from genuine customers
        </p>
        <button className="bg-purple-100 text-indigo-700 px-3 py-1 rounded mt-3 text-sm font-normal">
          +5 This week
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 pl-6 text-gray-700 div-text font-normal">
        {[5, 4, 3, 2, 1].map((star, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="text-sm w-12">{star} Star</span>
            <div className="bg-gray-200 h-2 flex-1 rounded relative mx-2">
              <div
                className="bg-indigo-500 h-2 rounded "
                style={{ width: `${[90, 50, 30, 20, 10][index]}%` }}
              ></div>
            </div>
            <span className="text-sm">{[124, 40, 12, 7, 2][index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewStatistics;
