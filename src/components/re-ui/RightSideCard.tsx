import { FaEdit } from "react-icons/fa";

interface RightSideCardProps {
  title: string;
  children: React.ReactNode;
  isEditable?: boolean;
}

const RightSideCard = ({ title, children, isEditable = false }: RightSideCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm div-text div-dark border-dark">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {isEditable && <FaEdit className="text-gray-500 cursor-pointer" />}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default RightSideCard;
