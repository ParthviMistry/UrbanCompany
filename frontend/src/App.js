import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import tw from "twin.macro";

import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
import Login from "../src/pages/Login";
import SignUp from "pages/Signup";
import CategoryPage from "pages/CategoryPage";
import MainHeader from "components/headers/main";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Container = tw.div`relative -mx-8 -mt-8 mr-8 xl:pl-10 pt-12`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* <HotelTravelLandingPage /> */}
      <Provider store={store}>
        <Container>
          <MainHeader />
        </Container>
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

