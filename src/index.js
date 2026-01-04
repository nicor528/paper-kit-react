/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ServicesPage from "views/examples/ServicesPage";
import LandingPageExample from "views/examples/LandingPageExample";
import ProfilePageRiqui from "views/examples/ProfilePageRiqui";
import Contact from "views/examples/contact";
import InglishLandingPage from "views/inglish/InglishLandingPage";
import InglishServicesPage from "views/inglish/InglishServicesPage";
import InglishProfilePageRiqui from "views/inglish/InglishProfilePageRiqui";
import InglishContact from "views/inglish/Inglishcontact";
import LandingPage2 from "views/final/LandingPage2";
import LandingPage from "views/examples/LandingPage";
import { LanguageProvider } from "context/LanguageContext";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
  {      <Route path="/index" element={<Index />} />}
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route path="/landing-page2" element={<LandingPage2 />} />
        <Route path="/landing-page-example" element={<LandingPageExample />} />
        <Route path="/" element={<LandingPage2 />} />
        <Route path="/profile-page-nico" element={<ProfilePageRiqui />} />
        <Route path="/profile-page-brian" element={<ProfilePageRiqui />} />
        <Route path="/profile-page-julian" element={<ProfilePageRiqui />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/services-page" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/landing-page-in" element={<InglishLandingPage />} />
        <Route path="/services-page-in" element={<InglishServicesPage />} />
        <Route path="/profile-page-nico-in" element={<InglishProfilePageRiqui />} />
        <Route path="/contact-in" element={<InglishContact />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);
