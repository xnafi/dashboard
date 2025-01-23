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
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
