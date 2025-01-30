import React from "react";

interface SalesCardProps {
  title: string;
  subtitle?: string;
  amount: string;
  imageUrl?: string;
  progress?: {
    orderPercentage: string;
    orderValue: string;
    visitPercentage: string;
    visitValue: string;
  };
  change?: string;
}

const SalesCard: React.FC<SalesCardProps> = ({ title, subtitle, amount, imageUrl, progress, change }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
      {/* Title and Change Indicator */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
          <p className="text-2xl font-semibold mt-2">{amount}</p>
        </div>
        {change && <p className="text-sm text-green-500 font-medium">{change}</p>}
      </div>

      {/* Conditional Chart Image */}
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="chart" className="w-full h-auto" />
        </div>
      )}

      {/* Progress Bar Section */}
      {progress && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-600 font-medium">
            <span className="flex items-center gap-1">
              🛒 Order <span className="text-black">{progress.orderPercentage}</span>
            </span>
            <span className="text-gray-400">{progress.orderValue}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-600 font-medium mt-2">
            <span className="flex items-center gap-1">
              🔗 Visits <span className="text-black">{progress.visitPercentage}</span>
            </span>
            <span className="text-gray-400">{progress.visitValue}</span>
          </div>

          {/* Progress Bar */}
          <div className="mt-2 w-full h-2 bg-gray-200 rounded-full relative">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: progress.orderPercentage }}
            ></div>
            <div
              className="h-2 bg-purple-500 rounded-full"
              style={{ width: progress.visitPercentage }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesCard;
