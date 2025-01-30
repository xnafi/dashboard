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
    <div className="bg-white p-6 w-80">
      {/* Title and Change Indicator */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
          <p className="text-xl font-semibold mt-2">{amount}</p>
        </div>
        {change && <p className="text-sm text-green-500 font-medium">{change}</p>}
      </div>

      {/* Conditional Chart Image */}
      {imageUrl && (
        <div className="mt-8">
          <img src={imageUrl} alt="chart" className="w-full  h-auto" />
        </div>
      )}

      {/* Progress Bar Section */}
{progress && (
  <div className="mt-6">
    {/* Order & Visits */}
    <div className="flex items-center justify-between text-xs text-gray-600 font-medium">
      {/* Order Section */}
      <div className="flex flex-col items-start w-1/2">
        <div className="flex items-center gap-1">
          <span className="text-blue-500 text-lg">🛒</span>
          <span>Order</span>
        </div>
        <span className="text-black text-sm">{progress.orderPercentage}</span>
        <span className="text-gray-400 text-xs">{progress.orderValue}</span>
      </div>

      {/* VS Divider */}
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 text-sm font-semibold">
        VS
      </div>

      {/* Visits Section */}
      <div className="flex flex-col items-end w-1/2">
        <div className="flex items-center gap-1">
          <span >Visits</span>
          <span className="text-purple-500 text-lg">🔗</span>
        </div>
        <span className="text-black text-sm">{progress.visitPercentage}</span>
        <span className="text-gray-400 text-xs">{progress.visitValue}</span>
      </div>
    </div>

    {/* Progress Bar */}
    <div className="mt-4 w-full h-2  rounded-full relative flex flex-row">
      <div
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: progress.orderPercentage }}
      ></div>
      <div
        className="h-2 bg-purple-500 rounded-full "
        style={{ width: progress.visitPercentage }}
      ></div>
    </div>
  </div>
)}

    </div>
  );
};

export default SalesCard;
