import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";

import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import Login from "../src/pages/Login";
import SignUp from "pages/Signup";
import CategoryPage from "pages/CategoryPage";
import Hero from "components/hero/FullWidthWithImage.js";

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* <HotelTravelLandingPage /> */}
      <Provider store={store}>
        {/* <Hero /> */}
        <Router>
          <Routes>
            <Route path="/" element={<HotelTravelLandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category/" element={<CategoryPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

