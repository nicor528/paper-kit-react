import React from "react";

// reactstrap components
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarouselServices from "views/index-sections/SectionCarousel-services";
import RiquiTechNavBar from "components/Navbars/riquitech-navbar";
import ServicecPageHeader from "components/Headers/ServicePageHeader";
import RiquiFooter from "components/Footers/RiquiFooter";
import ContactPageHeader from "components/Headers/ContactPageHeader";
import RiquiTechNavBar1 from "components/Navbars/riquitech-navbar copy";

function Contact() {

    return(
        <>
        <RiquiTechNavBar1/>
        <ContactPageHeader/>
    <RiquiFooter />
    </>
    )
}

export default Contact;