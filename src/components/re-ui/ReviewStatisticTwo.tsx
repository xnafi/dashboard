

const ReviewStatisticTwo = () => {
    return (
        <div className="flex justify-between items-center text-2xl font-bold div-dark div-text p-4 ">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="sub-heading div-text">Reviews statistics</h3>
            <div className="flex items-center gap-2 text-sm mt-2 text-gray-700 font-normal div-text">
              <span>12 New reviews</span>
              <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-md text-xs font-medium">
                +8.4%
              </span>
            </div>
            <div className="text-sm font-medium text-green-600 mt-14">
              87%{" "}
              <span className="text-gray-700 font-normal div-text">
                Positive reviews
              </span>
            </div>
            <div className="text-xs text-gray-500 font-normal">
              Weekly Report
            </div>
          </div>

          {/* Right Section - Bar Chart */}
          <div className="flex-1 pl-6 flex items-end gap-2 h-36 mt-4">
            {[10, 20, 30, 25, 60, 45, 35].map((value, index) => (
              <div
                key={index}
                className={`w-4 h-2 rounded transition-all ${
                  index === 4 ? "bg-green-600" : "bg-green-300"
                }`}
                style={{ height: `${value}%` }}
              ></div>
            ))}
          </div>
        </div>
    );
};

export default ReviewStatisticTwo;