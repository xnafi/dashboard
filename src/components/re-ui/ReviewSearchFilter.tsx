import { FaSearch } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

interface ReviewSearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
}

const ReviewSearchFilter: React.FC<ReviewSearchFilterProps> = ({ search, setSearch }) => {
  return (
    <div className="flex justify-between items-center mb-4 dark:bg-gray-800">
      {/* Search Input */}
      <div className="relative dark:bg-gray-800">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Review"
          className="pl-10 pr-4 py-2 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-800"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter & Export */}
      <div className="flex items-center gap-3">
        <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <select className="border p-2 rounded-md dark:border-gray-700 dark:bg-gray-800 text-gray-500 font-normal">
          <option value="all">All</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <button className="bg-gray-200 text-gray-500 px-4 py-2 border rounded-md flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800 btn-text">
          <FiDownload className="text-gray-600" /> Export
        </button>
      </div>
    </div>
  );
};

export default ReviewSearchFilter;
