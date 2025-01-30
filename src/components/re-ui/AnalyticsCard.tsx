// import { FiMoreHorizontal } from "react-icons/fi";

interface AnalyticsCardProps {
  title: string;
  conversionRate: string;
  stats: { label: string; value: string }[];
  imageUrl: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, conversionRate, stats, imageUrl }) => {
  return (
    <div className="relative bg-indigo-500 text-white p-6 w-full max-w-md flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm opacity-75 ">{conversionRate}</p>
        </div>
        {/* <FiMoreHorizontal className="text-2xl cursor-pointer opacity-75" /> */}
      </div>

      {/* Content: Stats & Image */}
      <div className="flex justify-between items-center mt-6">
        {/* Traffic Stats */}
        <div>
          <p className="text-sm font-medium text-start">Traffic</p>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2  px-3 py-1 rounded-md">
                <span className="text-sm font-semibold bg-indigo-700 min-w-8">{stat.value}</span>
                <span className="text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Positioned on the Right */}
        <img src={imageUrl} alt="Analytics" className="w-48" />
      </div>

      {/* Dots Indicator */}
      <div className="absolute top-4 right-6 flex space-x-1">
        <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
