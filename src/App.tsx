import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members";
import Banner from "./pages/Banner/Banner";
import Features from "./pages/Features/Features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/banner" element={<Banner />} />
        <Route path="/features" element={<Features />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
