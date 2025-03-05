import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  border?: boolean;
}

const SummaryCard = ({ title, value, icon, border }: SummaryCardProps) => {
  return (
    <div className={`flex items-center gap-3 ${border ? "border-l pl-4 border-dark" : ""}`}>
      <div>
        <h2 className="text-xl font-bold">{value}</h2>
        <p className="text-gray-500">{title}</p>
      </div>
      <div className="ml-auto text-lg text-gray-400">{icon}</div>
    </div>
  );
};

export default SummaryCard;
