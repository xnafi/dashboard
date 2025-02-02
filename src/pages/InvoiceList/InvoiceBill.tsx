import React from "react";
import { FaPaperPlane, FaDownload, FaPrint, FaEdit } from "react-icons/fa";

const InvoiceBill: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 mt-20 ml-4">
      {/* Search Bar */}
      

      <div className="flex gap-6">
        {/* Invoice Card */}
        <div className="bg-white shadow-md rounded-lg p-6 w-3/4 ">
          {/* Header */}
          <div className="bg-gray-50 gap-3 ">
            <div className="text-indigo-600 font-bold text-xl mt-2 ml-2">Vuexy</div>
            <div className="flex justify-between items-center ">
            <div className="text-sm text-gray-500 ml-2">
              Office 149, 450 South Brand Brooklyn <br />
              San Diego County, CA 91905, USA <br />
              +1 (123) 456 7891, +44 (876) 543 2198
            </div>
             {/* Invoice Number */}
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <p className="font-semibold">Invoice #3492</p>
            <p>Date Issued: 25/08/2020</p>
            <p>Date Due: 29/08/2020</p>
          </div>
            </div>
            
          </div>

          {/* Invoice Details */}
          <div className="flex justify-between mb-6">
            <div>
              <h4 className="font-semibold">Invoice To:</h4>
              <p>Thomas Shelby</p>
              <p>Shelby Company Limited</p>
              <p>Small Heath, B10 0HF, UK</p>
              <p>718-986-6062</p>
              <p>peakyFBlinders@gmail.com</p>
            </div>
            <div className="mr-20">
              <h4 className="font-semibold">Bill To:</h4>
              <p>Total Due: <span className="font-semibold">$12,110.55</span></p>
              <p>Bank name: American Bank</p>
              <p>Country: United States</p>
              <p>IBAN: ETD95476213874685</p>
              <p>SWIFT code: BR91905</p>
            </div>
          </div>

         

          {/* Table */}
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">ITEM</th>
                <th className="p-2">DESCRIPTION</th>
                <th className="p-2">HOURS</th>
                <th className="p-2">QTY</th>
                <th className="p-2">PRICE</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-2">Premium Branding Package</td>
                <td className="p-2">Branding & Promotion</td>
                <td className="p-2">48</td>
                <td className="p-2">1</td>
                <td className="p-2">$32</td>
              </tr>
              <tr>
                <td className="p-2">Social Media</td>
                <td className="p-2">Social media templates</td>
                <td className="p-2">42</td>
                <td className="p-2">1</td>
                <td className="p-2">$28</td>
              </tr>
              <tr>
                <td className="p-2">Web Design</td>
                <td className="p-2">Web designing package</td>
                <td className="p-2">46</td>
                <td className="p-2">1</td>
                <td className="p-2">$24</td>
              </tr>
              <tr>
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
          <p className="mt-6 text-sm text-gray-600 text-start">
            <span className="font-semibold">Salesperson:</span> Tommy Shelby <br />
            Thanks for your business
          </p>
          </div>
            <div className="">
              <p>Subtotal: <span className="font-semibold">$1800</span></p>
              <p>Discount: <span className="font-semibold">$28</span></p>
              <p>Tax: <span className="font-semibold">21%</span></p>
              <p className="font-bold">Total: $1690</p>
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
  <div className="bg-white shadow-md rounded-lg p-4">
    {/* Send Invoice Button */}
    <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 hover:scale-105">
      <FaPaperPlane /> Send Invoice
    </button>

    {/* Download Button */}
    <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300  hover:bg-indigo-500 hover:scale-105">
      <FaDownload /> Download
    </button>

    {/* Print & Edit Buttons - Side by Side */}
    <div className="flex flex-row gap-2">
      <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 hover:scale-105">
        <FaPrint /> Print
      </button>
      <button className="w-full flex items-center justify-center gap-2 bg-gray-200 px-4 py-2 rounded mb-2 transition duration-300 hover:bg-indigo-500 hover:scale-105">
        <FaEdit /> Edit
      </button>
    </div>

    {/* Add Payment Button */}
    <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-500 hover:scale-105">
      + Add Payment
    </button>
  </div>
</div>

      </div>

      {/* Footer */}
      <div className="text-sm text-gray-600 mt-6 text-start">
        © 2024, Made with ❤️ by PIXINVENT
      </div>
    </div>
  );
};

export default InvoiceBill;
