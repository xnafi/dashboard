import { FaPaperPlane, FaDownload, FaPrint, FaEdit } from "react-icons/fa";
import { useState } from "react";

const InvoiceActions = () => {
  const [paymentTerms, setPaymentTerms] = useState(true);
  const [clientNotes, setClientNotes] = useState(true);
  const [paymentStub, setPaymentStub] = useState(true);

  return (
    <div className="w-64 dark:bg-gray-900 div-text">
      <div className="bg-white shadow-md rounded-lg p-4 div-dark div-text">
        {/* Send Invoice Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 div-text text-black px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
          <FaPaperPlane /> Send Invoice
        </button>

        {/* Download Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 div-text px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
          <FaDownload /> Download
        </button>

        {/* Print & Edit Buttons - Side by Side */}
        <div className="flex flex-row gap-2">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 div-text px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
            <FaPrint /> Print
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 div-text px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
            <FaEdit /> Edit
          </button>
        </div>

        {/* Add Payment Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-green-500 dark:hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-500 hover:scale-105">
          + Add Payment
        </button>
      </div>

      {/* Payment Options */}
      <div className="mt-4 bg-white shadow-md rounded-lg p-4 dark:bg-gray-900 div-text">
        <h4 className="text-gray-700 font-semibold mb-3 div-text">Accept payments via</h4>
        <select className="w-full border border-dark p-2 rounded bg-gray-100 dark:bg-gray-900 div-text focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Bank Account</option>
          <option>Bkash</option>
          <option>Rocket</option>
        </select>

        <div className="flex flex-col mt-3 space-y-3">
          {/* Payment Terms Toggle */}
          <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
            Payment Terms
            <div
              className={`relative w-10 h-5 rounded-full transition duration-300 ${paymentTerms ? "bg-indigo-500" : "bg-gray-300"}`}
              onClick={() => setPaymentTerms(!paymentTerms)}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${paymentTerms ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </div>
          </label>

          {/* Client Notes Toggle */}
          <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
            Client Notes
            <div
              className={`relative w-10 h-5 rounded-full transition duration-300 ${clientNotes ? "bg-indigo-500" : "bg-gray-300"}`}
              onClick={() => setClientNotes(!clientNotes)}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${clientNotes ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </div>
          </label>

          {/* Payment Stub Toggle */}
          <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
            Payment Stub
            <div
              className={`relative w-10 h-5 rounded-full transition duration-300 ${paymentStub ? "bg-indigo-500" : "bg-gray-300"}`}
              onClick={() => setPaymentStub(!paymentStub)}
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${paymentStub ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActions;