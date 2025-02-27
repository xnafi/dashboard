// ReUiModal.tsx
import React from "react";

interface ReUiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ReUiModal: React.FC<ReUiModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50">
      <div className="bg-white div-dark div-text w-80 h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="space-y-4">
          <input
            className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
            type="text"
            placeholder="Company"
          />

          <select className="w-full p-1 border rounded div-dark div-text dark:border-gray-500">
            <option>Select Country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>

          <input
            className="w-full p-1 border rounded div-dark div-text dark:border-gray-500"
            type="text"
            placeholder="Contact"
          />

          <select className="w-full p-1 border rounded div-dark div-text dark:border-gray-500">
            <option>Select Role</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Author</option>
          </select>

          <select className="w-full p-1 border rounded div-dark div-text dark:border-gray-500">
            <option>Select Plan</option>
            <option>Basic</option>
            <option>Premium</option>
            <option>Enterprise</option>
          </select>

          <select className="w-full p-1 border rounded div-dark div-text dark:border-gray-500">
            <option>Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-indigo-500 text-white rounded"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-300 text-red-700 dark:bg-red-900 dark:bg-transparent dark:text-red-400 rounded dark:hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReUiModal;
