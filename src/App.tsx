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
// import ECommerceProductList from "./pages/eCommerce/eCommerceProductList";
import ECommerceCategoryList from "./pages/eCommerce/ECommerceCategoryList";
import ECommerceProductAdd from "./pages/eCommerce/ECommerceProductAdd";
import ECommerceProductList from "./pages/eCommerce/ECommerceProductList";


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
          <Route path="/ECommerceProductList" element={<ECommerceProductList />} />
          <Route path="/ECommerceProductAdd" element={<ECommerceProductAdd />} />
          <Route path="/ECommerceCategoryList" element={<ECommerceCategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
