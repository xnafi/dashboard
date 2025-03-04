import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  orders: string;
  percentage?: string;
  isPositive?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  orders,
  percentage,
  isPositive = true,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="text-2xl font-semibold">{value}</span>
      <div className="flex items-center gap-1">
        <span className="text-gray-500 text-sm">{orders}</span>
        {percentage && (
          <span
            className={`px-2 py-1 rounded-md text-xs mt-1 ${
              isPositive
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {isPositive ? `+${percentage}` : `-${percentage}`}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
