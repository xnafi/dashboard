import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

interface Customer {
  id: number;
  name: string;
  email: string;
  customerId: string;
  country: string;
  countryFlag: string;
  orders: number;
  totalSpent: string;
  avatar: string;
}

const customersData: Customer[] = [
  {
    id: 1,
    name: "Jordan Stevenson",
    email: "dayna19@yahoo.com",
    customerId: "#345889",
    country: "United States",
    countryFlag: "🇺🇸",
    orders: 41,
    totalSpent: "$32,907",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Benedetto Rossiter",
    email: "lorena@yahoo.com",
    customerId: "#234875",
    country: "Brazil",
    countryFlag: "🇧🇷",
    orders: 12,
    totalSpent: "$5,347",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Bentlee Emblin",
    email: "bemblinF@gmail.com",
    customerId: "#783645",
    country: "India",
    countryFlag: "🇮🇳",
    orders: 36,
    totalSpent: "$12,458",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Bertha Biner",
    email: "bbinerH@gmail.com",
    customerId: "#234876",
    country: "Australia",
    countryFlag: "🇦🇺",
    orders: 7,
    totalSpent: "$1,345",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 5,
    name: "Beverlie Krabbe",
    email: "bkrabbe1d@gmail.com",
    customerId: "#234598",
    country: "France",
    countryFlag: "🇫🇷",
    orders: 34,
    totalSpent: "$24,435",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const ECommerceAllCustomers = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Order"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Customer
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 text-left">Customers</th>
            <th className="px-4 py-2 text-left">Customer ID</th>
            <th className="px-4 py-2 text-left">Country</th>
            <th className="px-4 py-2 text-left">Orders</th>
            <th className="px-4 py-2 text-left">Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {customersData
            .filter((customer) =>
              customer.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{customer.name}</p>
                    <p className="text-gray-500 text-sm">{customer.email}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{customer.customerId}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <span>{customer.countryFlag}</span>
                  {customer.country}
                </td>
                <td className="px-4 py-2">{customer.orders}</td>
                <td className="px-4 py-2">{customer.totalSpent}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">Showing 1 to 5 of 100 entries</p>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 border rounded-md">{"<<"}</button>
          <button className="px-3 py-1 border rounded-md">1</button>
          <button className="px-3 py-1 border rounded-md bg-blue-500 text-white">
            2
          </button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">4</button>
          <button className="px-3 py-1 border rounded-md">{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default ECommerceAllCustomers;
