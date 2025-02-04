import React from "react";
import { FaPaperPlane, FaDownload, FaPrint, FaEdit } from "react-icons/fa";

const InvoiceBill: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-6 w-full dark:bg-gray-900  dark:text-gray-300">
      {/* Search Bar */}

      <div className="flex gap-6 ">
        {/* Invoice Card */}
        <div className="bg-white shadow-md rounded-lg p-6 w-3/4 dark:bg-gray-800  dark:text-gray-300">
          {/* Header */}
          <div className="bg-gray-50 gap-3 dark:bg-gray-700  dark:text-gray-300">
            <div className="text-indigo-600 font-bold text-xl mt-2 ml-2">
              Vuexy
            </div>
            <div className="flex justify-between items-center ">
              <div className="text-sm  ml-2">
                Office 149, 450 South Brand Brooklyn <br />
                San Diego County, CA 91905, USA <br />
                +1 (123) 456 7891, +44 (876) 543 2198
              </div>
              {/* Invoice Number */}
              <div className="bg-gray-100 p-3 rounded-lg mb-6 dark:bg-gray-700  dark:text-gray-300">
                <p className="font-semibold mb-2 dark:text-gray-300">
                  Invoice #3492
                </p>
                <p className="dark:text-gray-300">Date Issued: 25/08/2020</p>
                <p className="dark:text-gray-300">Date Due: 29/08/2020</p>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="flex justify-between mb-6">
            <div>
              <h4 className="font-semibold mb-4 mt-4">Invoice To:</h4>
              <p>Thomas Shelby</p>
              <p>Shelby Company Limited</p>
              <p>Small Heath, B10 0HF, UK</p>
              <p>718-986-6062</p>
              <p>peakyFBlinders@gmail.com</p>
            </div>
            <div className="mr-28 ">
              <h4 className="font-semibold mb-4 mt-4">Bill To:</h4>
              <div className="space-y-2">
                <div className="flex gap-12">
                  <p>Total Due:</p>
                  <span className="font-semibold">$12,110.55</span>
                </div>
                <div className="flex gap-8">
                  <p>Bank Name:</p>
                  <span className="">American Bank</span>
                </div>
                <div className="flex gap-14">
                  <p>Country:</p>
                  <span>United States</span>
                </div>
                <div className="flex gap-20">
                  <p>IBAN:</p>
                  <span>ETD95476213874685</span>
                </div>
                <div className="flex gap-7">
                  <p>SWIFT Code:</p>
                  <span>BR91905</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <table className="w-full border-collapse mb-6 border dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-500 dark:bg-gray-800  dark:text-gray-300 border dark:border-gray-700">
                <th className="p-2">ITEM</th>
                <th className="p-2">DESCRIPTION</th>
                <th className="p-2">HOURS</th>
                <th className="p-2">QTY</th>
                <th className="p-2">PRICE</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:border-gray-700">
              <tr className="dark:border-gray-700">
                <td className="p-2">Premium Branding Package</td>
                <td className="p-2">Branding & Promotion</td>
                <td className="p-2">48</td>
                <td className="p-2">1</td>
                <td className="p-2">$32</td>
              </tr>
              <tr className="dark:border-gray-700">
                <td className="p-2">Social Media</td>
                <td className="p-2">Social media templates</td>
                <td className="p-2">42</td>
                <td className="p-2">1</td>
                <td className="p-2">$28</td>
              </tr>
              <tr className="dark:border-gray-700">
                <td className="p-2">Web Design</td>
                <td className="p-2">Web designing package</td>
                <td className="p-2">46</td>
                <td className="p-2">1</td>
                <td className="p-2">$24</td>
              </tr>
              <tr className="dark:border-gray-700">
                <td className="p-2">SEO</td>
                <td className="p-2">Search engine optimization</td>
                <td className="p-2">40</td>
                <td className="p-2">1</td>
                <td className="p-2">$22</td>
              </tr>
            </tbody>
          </table>

          {/* Subtotal */}
          <div>
            <div className="flex justify-between text-right">
              <div>
                <p className="mt-6 text-sm text-gray-600 text-start dark:text-gray-300">
                  <span className="font-semibold dark:text-gray-300">
                    Salesperson:
                  </span>{" "}
                  Tommy Shelby <br />
                  Thanks for your business
                </p>
              </div>
              <div className="space-y-2  w-56">
                <div className="flex justify-between w-full">
                  <p>Subtotal:</p>
                  <span className="font-semibold">$1800</span>
                </div>
                <div className="flex justify-between w-full">
                  <p>Discount:</p>
                  <span className="font-semibold">$28</span>
                </div>
                <div className="flex justify-between w-full">
                  <p>Tax:</p>
                  <span className="font-semibold">21%</span>
                </div>
                {/* Border added here */}
                <hr className="border-gray-700 my-2" />
                <div className="flex justify-between w-full font-semibold">
                  <p>Total:</p>
                  <span>$1690</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}

          <p className="mt-6 text-xs text-gray-500 italic">
            Note: It was a pleasure working with you and your team. We hope you
            will keep us in mind for future freelance projects. Thank you!
          </p>
        </div>

        {/* Actions Panel */}
        <div className="w-1/4">
          <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-800  dark:text-gray-300">
            {/* Send Invoice Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-300 dark:hover:bg-indigo-300 hover:scale-105 dark:bg-gray-700  dark:text-gray-300">
              <FaPaperPlane /> Send Invoice
            </button>

            {/* Download Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300  hover:bg-indigo-300 dark:hover:bg-indigo-300 hover:scale-105 dark:bg-gray-700  dark:text-gray-300">
              <FaDownload /> Download
            </button>

            {/* Print & Edit Buttons - Side by Side */}
            <div className="flex flex-row gap-2">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-300 dark:hover:bg-indigo-300 hover:scale-105 dark:bg-gray-700  dark:text-gray-300">
                <FaPrint /> Print
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-300 dark:hover:bg-indigo-300 hover:scale-105 dark:bg-gray-700  dark:text-gray-300">
                <FaEdit /> Edit
              </button>
            </div>

            {/* Add Payment Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-300 dark:hover:bg-green-300 hover:scale-105">
              + Add Payment
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-600 mt-6 text-start dark:text-gray-300">
        © 2024, Made with ❤️ by PIXINVENT
      </div>
    </div>
  );
};

export default InvoiceBill;
