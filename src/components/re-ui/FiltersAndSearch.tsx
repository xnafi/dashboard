import { FiDownload } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

interface FiltersAndSearchProps {
  onOpenModal: () => void;
}

const FiltersAndSearch: React.FC<FiltersAndSearchProps> = ({ onOpenModal }) => {
  return (
    <div className="div-dark div-text p-4 rounded-lg shadow-md">
      <div>
        <h2 className="mb-4 text-lg font-semibold div-text">Filters</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <select className="border border-dark rounded-lg p-2 text-gray-700 bg-white div-dark div-text w-full">
            <option>Select Role</option>
          </select>
          <select className="border border-dark rounded-lg p-2 text-gray-700 bg-white div-dark div-text w-full">
            <option>Select Plan</option>
          </select>
          <select className="border border-dark rounded-lg p-2 text-gray-700 bg-white div-dark div-text w-full">
            <option>Select Status</option>
          </select>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex justify-between items-center mb-4">
        {/* Entries Dropdown */}
        <select className="border border-dark rounded-md px-2 py-2 text-gray-700 bg-white div-dark div-text w-20">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search User"
          className="border ml-80 pl-36 border-dark rounded-md px-4 py-2 text-gray-700 bg-white div-dark div-text w-1/3 mr-2"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-dark rounded-md px-2 py-2 text-gray-700 bg-gray-100 div-dark div-text">
            <FiDownload className="text-gray-500" />
            Export
          </button>
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-2 rounded-md"
          >
            <IoMdAdd className="text-white" />
            Add New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersAndSearch;
