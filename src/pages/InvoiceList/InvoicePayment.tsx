import { FaPaperPlane, FaDownload, FaPrint, FaEdit } from "react-icons/fa";
import { useState } from "react";
const InvoicePayment = () => {
  const [paymentTerms, setPaymentTerms] = useState(true);
  const [clientNotes, setClientNotes] = useState(true);
  const [paymentStub, setPaymentStub] = useState(true);
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 dark:bg-gray-900 div-text max-w-full rounded-lg shadow-md">
      <div className=" w-full rounded-lg p-4 flex gap-6 ">
        {/* Left Side: Invoice Details */}
        <div className="flex-1 div-dark  div-text p-6 rounded-lg">
          {/* Header */}
          <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center div-dark  div-text">
            <div>
              <h2 className="text-xl font-bold text-indigo-600 flex items-center gap-2 div-text">
                <span className="text-indigo-600 div-text">
                  Vuexy
                </span>
              </h2>
              <p className="text-gray-600 text-sm div-text">
                Office 149, 450 South Brand Brooklyn, <br /> San Diego County,
                CA 91905, USA
              </p>
              <p className="text-gray-600 text-sm div-text">
                +1 (123) 456 7891, +44 (876) 543 2198
              </p>
            </div>
            <div className="text-right">
              <div className="flex justify-between items-center gap-2 div-text">
                <div>
                  <h3 className="text-sm text-gray-500 div-text">
                    Invoice
                  </h3>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 border-dark px-2 py-1 rounded text-sm w-20 bg-gray-100 div-dark  div-text"
                    value="#45678"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <div className="">
                  <p className="text-sm text-gray-500 mt-1 div-text">
                    Date Issued:
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 border-dark px-2 py-1 rounded text-sm w-20 bg-gray-100 div-dark  div-text"
                    value="12/13/2013"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div>
                  <p className="text-sm text-gray-500 mt-1 div-text">
                    Due Date:
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 border-dark px-2 py-1 rounded text-sm w-20 bg-gray-100 div-dark  div-text"
                    value="4/23/2023"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Invoice To & Bill To */}
          <div className="mt-6 grid grid-cols-2 gap-6 div-text">
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 div-text">
                Invoice To:
              </h4>
              <select className="w-full border border-dark p-2 rounded bg-gray-100 mb-4 div-dark  div-text">
                <option>Jordan Stevenson</option>
              </select>
              <p className="text-sm text-gray-600 div-text">
                Hall-Robbins PLC
              </p>
              d
              <p className="text-sm text-gray-600 div-text">
                7777 Mendez Plains
              </p>
              <p className="text-sm text-gray-600 div-text">
                (616) 865-4180
              </p>
              <p className="text-sm text-gray-600 div-text">
                don85@johnson.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 div-text">
                Bill To:
              </h4>
              <div className="space-y-2">
                <div className="flex gap-7 justify-items-start text-sm text-gray-600 div-text">
                  <p>Total Due:</p>
                  <strong>$12,110.55</strong>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 div-text">
                  <p>Bank Name:</p>
                  <strong>American Bank</strong>
                </div>
                <div className="flex gap-9 text-sm text-gray-600 div-text">
                  <p>Country:</p>
                  <strong>United States</strong>
                </div>
                <div className="flex gap-14 text-sm text-gray-600 div-text">
                  <p>IBAN:</p>
                  <strong>ETD95476213874685</strong>
                </div>
                <div className="flex gap-3 text-sm text-gray-600 div-text">
                  <p>SWIFT Code:</p>
                  <strong>BR91905</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="mt-6 border border-dark rounded-lg p-4">
            <div className="grid grid-cols-4 text-gray-600 text-sm font-semibold border-b border-dark pb-2">
              <p className="div-text">Item</p>
              <p className="ml-52 div-text">Cost</p>
              <p className="ml-28 div-text">Hours</p>
              <p className="ml-10 div-text">Price</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <select className="border border-dark p-2 w-1/2 rounded bg-gray-100 text-gray-500 div-dark  div-text">
                <option>App Customization</option>
              </select>
              <div className="w-1/2 flex  items-center gap-4">
                <input
                  type="text"
                  className="border border-dark p-2 w-20 rounded bg-gray-100 text-center div-dark  div-text"
                  value="24"
                  readOnly
                />
                <input
                  type="text"
                  className="border border-dark p-2 w-20 rounded bg-gray-100 text-center div-dark  div-text"
                  value="1"
                  readOnly
                />
                <input
                  type="text"
                  className="border border-dark p-2 w-20 rounded bg-gray-100 text-right div-dark  div-text"
                  value="$24.00"
                  readOnly
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <input
                type="text"
                className="border border-dark p-2 w-1/2 rounded bg-gray-100 mt-2 text-gray-500 div-dark  div-text"
                value="Customization & Bug Fixes"
                readOnly
              />
              <p className="text-sm text-gray-600 mt-2 div-text">
                Discount: <br />
                0% 0% 0%
              </p>
            </div>
            <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition">
              + Add Item
            </button>
          </div>

          {/* Salesperson & Summary */}
          <div className="mt-6 flex justify-between items-center">
            <div className="">
              <div className="">
                <h4 className="font-semibold text-gray-700 div-text">
                  Salesperson:
                  <input
                    type="text"
                    className="border border-dark p-2 rounded bg-gray-100 ml-2 div-dark  div-text"
                    value="Edward Crowley"
                    readOnly
                  />
                </h4>
              </div>

              <div className="">
                <h2 className="text-gray-600 div-text">
                  Thanks for your business
                </h2>
              </div>
            </div>

            <div className="mr-24 space-y-2">
              <div className="flex justify-between text-sm text-gray-600 div-text gap-20">
                <p>Subtotal:</p>
                <strong>$1800</strong>
              </div>
              <div className="flex justify-between text-sm text-gray-600 div-text">
                <p>Discount:</p>
                <strong>$28</strong>
              </div>
              <div className="flex justify-between text-sm text-gray-600 div-text">
                <p>Tax:</p>
                <strong>21%</strong>
              </div>
              {/* Border added here */}
              <hr className="border-gray-300 border-dark my-2" />
              <div className="flex justify-between text-lg text-gray-600 div-text font-semibold">
                <p>Total:</p>
                <strong>$1690</strong>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-700 div-text">
              Note:
            </h4>
            <textarea
              className="w-full border border-dark p-2 rounded bg-gray-100 div-dark  div-text"
              readOnly
              value="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
            ></textarea>
          </div>
          {/* Footer */}
          <div className="text-sm text-gray-600 mt-6 text-start div-text">
            © 2024, Made with ❤️ by PIXINVENT
          </div>
        </div>

        {/* Right Side: Actions Panel */}
        <div className="w-64 dark:bg-gray-900  div-text ">
          <div className="bg-white shadow-md rounded-lg p-4 div-dark  div-text">
            {/* Send Invoice Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700  div-text text-black px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
              <FaPaperPlane /> Send Invoice
            </button>

            {/* Download Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700  div-text px-4 py-2 rounded mb-2 transition duration-300  hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
              <FaDownload /> Download
            </button>

            {/* Print & Edit Buttons - Side by Side */}
            <div className="flex flex-row gap-2">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700  div-text px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
                <FaPrint /> Print
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700  div-text px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:scale-105">
                <FaEdit /> Edit
              </button>
            </div>

            {/* Add Payment Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 dark:hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-500 hover:scale-105">
              + Add Payment
            </button>
          </div>

          {/* Payment Options */}
          <div className="mt-4 bg-white shadow-md rounded-lg p-4 dark:bg-gray-900  div-text">
            <h4 className="text-gray-700 font-semibold mb-3 div-text">
              Accept payments via
            </h4>

            {/* Payment Method Dropdown */}
            <select className="w-full border border-dark p-2 rounded bg-gray-100 dark:bg-gray-900  div-text focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Bank Account</option>
              <option>Bkash</option>
              <option>Rocket</option>
            </select>

            {/* Payment Options */}
            {/* Payment Options with Toggles */}
            <div className="flex flex-col mt-3 space-y-3">
              {/* Payment Terms Toggle */}
              <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
                Payment Terms
                <div
                  className={`relative w-10 h-5 rounded-full transition duration-300 ${
                    paymentTerms ? "bg-indigo-500" : "bg-gray-300"
                  }`}
                  onClick={() => setPaymentTerms(!paymentTerms)}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
                      paymentTerms ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>

              {/* Client Notes Toggle */}
              <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
                Client Notes
                <div
                  className={`relative w-10 h-5 rounded-full transition duration-300 ${
                    clientNotes ? "bg-indigo-500" : "bg-gray-300"
                  }`}
                  onClick={() => setClientNotes(!clientNotes)}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
                      clientNotes ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>

              {/* Payment Stub Toggle */}
              <label className="flex items-center justify-between text-gray-700 font-medium cursor-pointer div-text">
                Payment Stub
                <div
                  className={`relative w-10 h-5 rounded-full transition duration-300 ${
                    paymentStub ? "bg-indigo-500" : "bg-gray-300"
                  }`}
                  onClick={() => setPaymentStub(!paymentStub)}
                >
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
                      paymentStub ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePayment;
