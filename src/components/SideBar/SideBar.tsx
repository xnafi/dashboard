import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  // FaGraduationCap,
  // FaTruck,
  FaUsers,
  FaList,
  FaEye,
  FaShieldAlt,
  // FaCreditCard,
  // FaBell,
  // FaEnvelope,
  // FaComments,
  // FaCalendar,
  // FaTasks,
  FaFileInvoice,
  FaClipboardCheck,
  // FaUserShield,
  FaFileAlt,
  // FaPalette,
  // FaImage,
  // FaCog,
  // FaChartPie,
  // FaBook,
} from "react-icons/fa";

export default function Sidebar() {
  const [eCommerceMenuOpen, setECommerceMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  // const [billingMenuOpen, setBillingMenuOpen] = useState(false);
  const [invoiceMenuOpen, setInvoiceMenuOpen] = useState(false);
  // const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
  // const [formsMenuOpen, setFormsMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);

  return (
    <div className="w-64 fixed left-0 top-0 h-screen bg-gray-50 shadow-lg z-50 overflow-y-auto dark:bg-gray-900  div-text">
      {/* Sidebar Header */}
      <div className="flex items-center px-4 py-6">
        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white  dark:text-white font-bold">
          V
        </div>
        <h1 className="text-xl font-bold ml-3 dark:text-white">Vuexy</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4">
        {/* Dashboards */}
        <ul>
          <SidebarItem to="/" icon={<FaHome />} label="Dashboards">
            <span className="bg-red-500 text-white div-text text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              5
            </span>
          </SidebarItem>
        </ul>

        {/* Apps & Pages */}
        <div className="mt-6 px-4 text-gray-500 div-text text-sm font-semibold uppercase">
          Apps & Pages
        </div>
        <ul className="mt-2 space-y-1 div-text">
          {/* eCommerce Dropdown */}
          <SidebarDropdown
            isOpen={eCommerceMenuOpen}
            setIsOpen={setECommerceMenuOpen}
            icon={<FaShoppingCart />}
            label="eCommerce"
          >
            {/* Product Dropdown */}
            <SidebarDropdown
              isOpen={productOpen}
              setIsOpen={setProductOpen}
              icon={<FaList />}
              label="Product"
            >
              <SidebarSubItem
                to="/e-commerce-product-list"
                icon={<FaList />}
                label="List"
              />
              <SidebarSubItem
                to="/e-commerce-product-add"
                icon={<FaEye />}
                label="Add"
              />
              <SidebarSubItem
                to="/e-commerce-category-list"
                icon={<FaShieldAlt />}
                label="Category"
              />
            </SidebarDropdown>

            {/* Order Dropdown */}
            <SidebarDropdown
              isOpen={orderOpen}
              setIsOpen={setOrderOpen}
              icon={<FaClipboardCheck />}
              label="Order"
            >
              <SidebarSubItem
                to="/e-commerce-order-ist"
                icon={<FaClipboardCheck />}
                label="List"
              />
              <SidebarSubItem
                to="/e-commerce-order-details"
                icon={<FaEye />}
                label="Details"
              />
            </SidebarDropdown>

            {/* Customers Dropdown */}
            <SidebarDropdown
              isOpen={customerOpen}
              setIsOpen={setCustomerOpen}
              icon={<FaList />}
              label="Customers"
            >
              <SidebarSubItem
                to="/e-commerce-all-customers"
                icon={<FaList />}
                label="All"
              />
              <SidebarSubItem
                to="/e-commerce-customer-security"
                icon={<FaClipboardCheck />}
                label="Security"
              />
              <SidebarSubItem
                to="/e-commerce-customer-address"
                icon={<FaEye />}
                label="Address"
              />
            </SidebarDropdown>

            {/* Standalone Items */}
            <SidebarSubItem
              to="/e-commerce-manage-review"
              icon={<FaShieldAlt />}
              label="Manage Review"
            />
            <SidebarSubItem
              to="/e-commerce-referrals"
              icon={<FaClipboardCheck />}
              label="Referrals"
            />
            <SidebarSubItem
              to="/e-commerce-store-details"
              icon={<FaEye />}
              label="Store Details"
            />
            <SidebarSubItem
              to="/e-commerce-payment"
              icon={<FaShieldAlt />}
              label="Payment"
            />
            <SidebarSubItem
              to="/e-commerce-checkOut"
              icon={<FaClipboardCheck />}
              label="Check Out"
            />
            <SidebarSubItem
              to="/e-commerce-shipping"
              icon={<FaEye />}
              label="Shipping"
            />
            <SidebarSubItem
              to="/e-commerce-locations"
              icon={<FaShieldAlt />}
              label="Locations"
            />
            <SidebarSubItem
              to="/e-commerce-notifications"
              icon={<FaClipboardCheck />}
              label="Notifications"
            />
          </SidebarDropdown>

          {/* <SidebarItem
            to="/academy"
            icon={<FaGraduationCap />}
            label="Academy"
          />
          <SidebarItem to="/logistics" icon={<FaTruck />} label="Logistics" /> */}

          {/* Users Dropdown */}
          <SidebarDropdown
            isOpen={userMenuOpen}
            setIsOpen={setUserMenuOpen}
            icon={<FaUsers />}
            label="Users"
          >
            <SidebarSubItem
              to="/user-list"
              icon={<FaList />}
              label="List"
            />
            <SidebarSubItem
              to="/user-overview"
              icon={<FaEye />}
              label="Overview"
            />
            <SidebarSubItem
              to="/user-security"
              icon={<FaShieldAlt />}
              label="Security"
            />
            <SidebarSubItem
              to="/user-plans"
              icon={<FaClipboardCheck />}
              label="Plans"
            />
          </SidebarDropdown>

          {/* Billing Dropdown */}
          {/* <SidebarDropdown
            isOpen={billingMenuOpen}
            setIsOpen={setBillingMenuOpen}
            icon={<FaCreditCard />}
            label="Billing & Plans"
          >
            <SidebarSubItem
              to="/billing/notifications"
              icon={<FaBell />}
              label="Notifications"
            />
            <SidebarSubItem
              to="/billing/connection"
              icon={<FaClipboardCheck />}
              label="Connection"
            />
          </SidebarDropdown> */}

          {/* <SidebarItem to="/email" icon={<FaEnvelope />} label="Email" />
          <SidebarItem to="/chat" icon={<FaComments />} label="Chat" />
          <SidebarItem to="/calendar" icon={<FaCalendar />} label="Calendar" />
          <SidebarItem to="/kanban" icon={<FaTasks />} label="Kanban" /> */}

          {/* Invoice Dropdown */}

          <SidebarDropdown
            isOpen={invoiceMenuOpen}
            setIsOpen={setInvoiceMenuOpen}
            icon={<FaFileInvoice />}
            label="Invoice"
          >
            <SidebarSubItem
              to="/invoice-list"
              icon={<FaList />}
              label="List"
              // activeBg
            />
            <SidebarSubItem
              to="/invoice-payment"
              icon={<FaEye />}
              label="Preview"
            />
            <SidebarSubItem
              to="/invoice-bill"
              icon={<FaFileAlt />}
              label="Edit"
            />
            {/* <SidebarSubItem to="/invoice/add" icon={<FaClipboardCheck />} label="Add" /> */}
          </SidebarDropdown>

          {/* <SidebarItem
            to="/roles"
            icon={<FaUserShield />}
            label="Roles & Permissions"
          /> */}
        </ul>

        {/* Pages */}
        {/* <div className="mt-6 px-4 text-gray-500 text-sm font-semibold uppercase">
          Pages
        </div> */}
        {/* <ul className="mt-2 space-y-1">
          <SidebarDropdown
            isOpen={pagesMenuOpen}
            setIsOpen={setPagesMenuOpen}
            icon={<FaFileAlt />}
            label="Pages"
          >
            <SidebarSubItem
              to="/pages/authentications"
              icon={<FaShieldAlt />}
              label="Authentications"
            />
            <SidebarSubItem
              to="/pages/wizard"
              icon={<FaClipboardCheck />}
              label="Wizard Examples"
            />
            <SidebarSubItem
              to="/pages/dialogs"
              icon={<FaCog />}
              label="Dialog Examples"
            />
          </SidebarDropdown>
        </ul> */}

        {/* User Interface */}
        {/* <div className="mt-6 px-4 text-gray-500 text-sm font-semibold uppercase">
          User Interface
        </div> */}
        {/* <ul className="mt-2 space-y-1">
          <SidebarItem
            to="/typography"
            icon={<FaPalette />}
            label="Typography"
          />
          <SidebarItem to="/icons" icon={<FaImage />} label="Icons" />
        </ul> */}

        {/* Forms & Tables */}
        {/* <div className="mt-6 px-4 text-gray-500 text-sm font-semibold uppercase">
          Forms & Tables
        </div> */}
        {/* <ul className="mt-2 space-y-1">
          <SidebarDropdown
            isOpen={formsMenuOpen}
            setIsOpen={setFormsMenuOpen}
            icon={<FaClipboardCheck />}
            label="Forms"
          >
            <SidebarSubItem
              to="/forms/elements"
              icon={<FaClipboardCheck />}
              label="Form Elements"
            />
            <SidebarSubItem
              to="/forms/layout"
              icon={<FaClipboardCheck />}
              label="Form Layout"
            />
            <SidebarSubItem
              to="/forms/validation"
              icon={<FaClipboardCheck />}
              label="Form Validation"
            />
          </SidebarDropdown>
        </ul> */}

        {/* Charts & Misc */}
        {/* <div className="mt-6 px-4 text-gray-500 text-sm font-semibold uppercase">
          Charts & Misc
        </div> */}
        {/* <ul className="mt-2 space-y-1">
          <SidebarItem to="/charts" icon={<FaChartPie />} label="Charts" />
          <SidebarItem
            to="/documentation"
            icon={<FaBook />}
            label="Documentation"
          />
        </ul> */}
      </nav>
    </div>
  );
}

/* Sidebar Single Item Component */
function SidebarItem({ to, icon, label, children }: any) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center px-4 py-3 rounded-md ${
            isActive
              ? "bg-purple-100 text-indigo-700 font-semibold"
              : "hover:bg-gray-100 text-gray-700"
          }`
        }
      >
        <span className="text-xl">{icon}</span>
        <span className="ml-3 flex-1">{label}</span>
        {children}
      </NavLink>
    </li>
  );
}

/* Sidebar Dropdown Component */
function SidebarDropdown({ isOpen, setIsOpen, icon, label, children }: any) {
  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-md hover:bg-gray-100 text-gray-700 focus:outline-none"
      >
        {/* Left Side (Icon + Label) */}
        <div className="flex items-center">
          <span className="text-xl">{icon}</span>
          <span className="ml-3">{label}</span>
        </div>

        {/* Right Side (Dropdown Indicator) */}
        <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && <ul className="pl-10 mt-1">{children}</ul>}
    </li>
  );
}

/* Sidebar Sub-Item Component */
function SidebarSubItem({ to, icon, label, activeBg }: any) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center px-2 py-2 rounded-md ${
            isActive
              ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold"
              : "hover:bg-indigo-300 text-gray-600"
          }`
        }
      >
        <span className="text-lg">{icon}</span>
        <span className="ml-3">{label}</span>
        {activeBg && (
          <span className="ml-auto w-3 h-3 bg-white rounded-full border-2 border-indigo-700"></span>
        )}
      </NavLink>
    </li>
  );
}
