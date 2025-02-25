import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members";
import Banner from "./pages/Banner/Banner";
import Features from "./pages/Features/Features";
import OurTeams from "./pages/OurTeams/OurTeams";
import PricingPlan from "./pages/PricingPlan/PricingPlan";
import JoinCommunity from "./pages/JoinCommunity/JoinCommunity";
import GetStarted from "./pages/GetStarted/GetStarted";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./pages/Footer/Footer";
import LogIn from "./pages/LogIn/LogIn";
import InvoiceList from "./pages/InvoiceList/InvoiceList";
import InvoiceBill from "./pages/InvoiceList/InvoiceBill";
import InvoicePayment from "./pages/InvoiceList/InvoicePayment";
import UserList from "./pages/User/UserList";
import Register from "./pages/Register/Register";
import UserOverview from "./pages/User/UserOverview";
import UserSecurity from "./pages/User/UserSecurity";
import UserPlans from "./pages/User/UserPlans";
import ECommerceCategoryList from "./pages/eCommerce/ECommerceCategoryList";
import ECommerceProductAdd from "./pages/eCommerce/ECommerceProductAdd";
import ECommerceProductList from "./pages/eCommerce/ECommerceProductList";
import ECommerceAllCustomers from "./pages/eCommerce/ECommerceAllCustomers";
import ECommerceOrderDetails from "./pages/eCommerce/ECommerceOrderDetails";
import ECommerceUserOverview from "./pages/eCommerce/ECommerceUserOverview";
import ECommerceOrderList from "./pages/eCommerce/ECommerceOrderList";
import ECommerceCustomerSecurity from "./pages/eCommerce/ECommerceCustomerSecurity";
import ECommerceCustomerAddress from "./pages/eCommerce/ECommerceCustomerAddress";
import ECommerceManageReview from "./pages/eCommerce/ECommerceManageReview";
import ECommerceReferrals from "./pages/eCommerce/ECommerceReferrals";
import ECommerceStoreDetails from "./pages/eCommerce/ECommerceStoreDetails";
import ECommercePayment from "./pages/eCommerce/ECommercePayment";
import ECommerceCheckOut from "./pages/eCommerce/ECommerceCheckOut";
import ECommerceShipping from "./pages/eCommerce/ECommerceShipping";
import ECommerceLocations from "./pages/eCommerce/ECommerceLocations";
import ECommerceNotifications from "./pages/eCommerce/ECommerceNotifications";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/banner" element={<Banner />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ourTeams" element={<OurTeams />} />
        <Route path="/pricingPlan" element={<PricingPlan />} />
        <Route path="/joinCommunity" element={<JoinCommunity />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/invoice-list" element={<InvoiceList />} />
          <Route path="/invoice-bill" element={<InvoiceBill />} />
          <Route path="/invoice-payment" element={<InvoicePayment />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-overview" element={<UserOverview />} />
          <Route path="/user-security" element={<UserSecurity />} />
          <Route path="/user-plans" element={<UserPlans />} />
          <Route path="/e-commerce-product-list" element={<ECommerceProductList />} />
          <Route path="/e-commerce-product-add" element={<ECommerceProductAdd />} />
          <Route path="/e-commerce-category-list" element={<ECommerceCategoryList />} />
          <Route path="/e-commerce-order-ist" element={<ECommerceOrderList/>} />
          <Route path="/e-commerce-all-customers" element={<ECommerceAllCustomers/>} />
          <Route path="/e-commerce-order-details" element={<ECommerceOrderDetails/>} />
          <Route path="/e-commerce-user-overview" element={<ECommerceUserOverview/>} />
          <Route path="/e-commerce-customer-security" element={<ECommerceCustomerSecurity/>} />
          <Route path="/e-commerce-customer-address" element={<ECommerceCustomerAddress/>} />
          <Route path="/e-commerce-manage-review" element={<ECommerceManageReview/>} />
          <Route path="/e-commerce-referrals" element={<ECommerceReferrals/>} />
          <Route path="/e-commerce-store-details" element={<ECommerceStoreDetails/>} />
          <Route path="/e-commerce-payment" element={<ECommercePayment/>} />
          <Route path="/e-commerce-checkOut" element={<ECommerceCheckOut/>} />
          <Route path="/e-commerce-shipping" element={<ECommerceShipping/>} />
          <Route path="/e-commerce-locations" element={<ECommerceLocations/>} />
          <Route path="/e-commerce-notifications" element={<ECommerceNotifications/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
