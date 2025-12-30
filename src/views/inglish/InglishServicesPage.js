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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
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
import InglishServicecPageHeader from "components/Inglish Headers/InglishServicePageHeader";
import InglishRiquiTechNavBar from "components/Inglish Navbars/inglish-riquitech-navbar";
import { useNavigate } from "react-router-dom";

function InglishServicesPage() {
  document.documentElement.classList.remove("nav-open");
  const navegar = useNavigate()
  const goInglishLanding = () => {
    navegar(`/landing-page-example`)
  }
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <InglishRiquiTechNavBar />
      <InglishServicecPageHeader />
      <div className="main">
        <div className="section text-left" id="landing">
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="ml-auto mr-auto" md="7">
                <h2 className="title">Landing pages or Presentation Pages
                <div className="icon icon-info">
                    <i className="nc-icon nc-badge" />
                </div>
                </h2>
                <h5 className="description">
                Elevate your online presence with our custom landing pages! At Riquel Tech Solutions, we understand
                that the first impression is crucial. That's why we offer a wide range of captivating designs, created
                to perfectly fit your style and needs. Whether you're launching a new venture, promoting your business,
                or aiming to stand out on the web, our landing pages are designed to impress. They are fast, effective,
                and meticulously crafted to attract and retain the attention of your potential customers. Let your online
                presence shine with our custom landing pages.
                </h5>
                <br />
{      /*          <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Detalles sobre nuestros servicios
                </Button>*/}
              </Col>
              <Col className="text-center" md="5">
                <img
                  alt="..."
                  className="img-rounded im3g-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              <Button
                className="btn-round mr-1 mt-2"
                type="button"
                color="default"
                onClick={goInglishLanding}
              >
                Landing Page
              </Button>
            </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-right" id="e-commerce">
          <Container>
          <Row className="d-flex align-items-center">
            <Col className="text-center" md="5">
              <a href="https://celadon-mandazi-05c73d.netlify.app/" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/javaweed.JPG")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-round mr-1 mt-2"
                type="button"
                color="default"
                href="https://celadon-mandazi-05c73d.netlify.app/"
                target="_blank"
              >
                E-Commerce
              </Button>
            </Col>
            <Col className="ml-auto mr-auto" md="7">
              <h2 className="title">E-commerce Development or Electronic Sales Page
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
              </h2>
              <h5 className="description">
              Power up your online sales with our custom e-commerce pages! At Riquel Tech Solutions, we understand
              the importance of making a good impression from the outset. That's why we offer a wide variety of captivating
              designs, designed to fit your style and specific needs. Whether you're launching a new online store, promoting
              your products, or aiming to stand out in the digital world, our e-commerce pages are designed to impress. They
              are fast, effective, and meticulously crafted to capture and retain the attention of your potential customers.
              Let us make your online presence shine with our custom e-commerce pages.
              </h5>
            </Col>
          </Row>
          </Container>
        </div>
        <div className="section text-left" id="newideas">
          <Container>
          <Row className="d-flex align-items-center">
            <Col className="ml-auto mr-auto" md="7">
              <h2 className="title">Development
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
              </h2>
              <h5 className="description">
              Immerse yourself in the exciting world of technological innovation with our comprehensive development service.
              At Riquel Tech Solutions, we are committed to turning your ideas into tangible digital products that exceed your expectations.
              From captivating web applications to intuitive mobile platforms, our highly skilled developers combine innovation with experience
              to turn the impossible into possible.

              With a focus on technological forefront, we integrate Web3 concepts and blockchain technology to offer advanced, decentralized digital solutions
              that set industry standards. Additionally, we harness the power of artificial intelligence to add a layer of intelligence and automation to your applications,
              enhancing user experience and streamlining internal processes.

              Our development process revolves around understanding your business needs and goals to provide you with customized solutions that perfectly fit your vision
              and requirements. From conception to implementation and beyond, we accompany you every step of the way, ensuring your project is a success from the outset.

              Let us be your partner on the journey towards digital transformation. With Riquel Tech Solutions, your ideas will become reality, driven by innovation, experience,
              and a commitment to excellence.
              </h5>
            </Col>
           <Col className="text-center" md="5">
              <a href="" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ideas.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
  {/*             <Button
                className="btn-round mr-1 mt-2"
                type="button"
                color="default"
                href="/landing-page-example"
                target="_blank"
              >
                Landing Page
              </Button>*/}
            </Col>
          </Row>
          </Container>
        </div>
        <div className="section section-dark text-right" id="data">
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="text-center" md="5">
                <a href="https://65e0d81dd0a6ef147a6fc21c--datadashboardriqueltech.netlify.app/" target="_blank">
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/dahs.JPG")}
                    style={{ width: "100%" }}
                  />
                </a>
                <Button
                  className="btn-round mr-1 mt-2"
                  type="button"
                  color="default"
                  href="https://65e0d81dd0a6ef147a6fc21c--datadashboardriqueltech.netlify.app/"
                  target="_blank"
                >
                  Admin Dashboard
                </Button>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <h2 className="title">Statistics and Data Analysis
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                </h2>
                <h5 className="description" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Explore a world of possibilities with our specialized data analysis service.
                Immerse yourself in the vast amount of available information and discover valuable insights
                that can take your business to new heights of success.
                From trend analysis to uncovering hidden patterns, our team of experts transforms seemingly
                simple data into deep and powerful perspectives.
                Utilizing the latest analysis tools and techniques, we unlock the potential of your data sets
                to provide you with a clear and comprehensive understanding of your market, customers, and business operations.
                With our detailed insights and strategic recommendations, you will be better equipped to make informed and effective decisions
                that drive growth and profitability for your business.
                Let us help you turn your data into a competitive advantage!
                </h5>
                <br />
{      /*          <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Detalles sobre nuestros servicios
                </Button>*/}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-left" id="robotica">
          <Container>
          <Row className="d-flex align-items-center">
            <Col className="ml-auto mr-auto" md="7">
              <h2 className="title">Robotics and Home Automation (Coming Soon)
                <div className="icon icon-info">
                  <i className="nc-icon nc-settings-gear-65" />
                </div>
              </h2>
              <h5 className="description">
              Discover a new level of comfort and efficiency with our advanced robotics and home automation solutions.
              At Riquel Tech Solutions, we combine cutting-edge robotics technology with smart home automation to offer
              you a fully automated ecosystem that will transform your home or office into a modern and efficient space.

              Our team of robotics and home automation experts works tirelessly to create custom solutions that perfectly
              fit your needs and lifestyle. From security and access control systems to monitoring devices and energy management,
              our solutions are designed to make your life safer, more comfortable, and more convenient.

              Furthermore, we harness the power of artificial intelligence to add an additional layer of intelligence to our systems,
              enabling smarter automation and more intuitive interaction with your environment. With AI integration, our solutions
              can learn and adapt to your preferences and usage patterns, constantly optimizing efficiency and comfort.

              Whether you're looking to enhance the security of your home, increase the energy efficiency of your office, or simply
              simplify your daily life, our robotics and home automation solutions are designed to help you achieve your goals.
              At Riquel Techs, we are committed to providing innovative solutions that make your life easier and allow you to fully
              enjoy your space.
              </h5>
            </Col>
            <Col className="text-center" md="5">
              <a href="https://www.youtube.com/watch?v=zxIBRXfAJbQ" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/domo.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-round mr-1 mt-2"
                type="button"
                color="default"
                href="https://www.youtube.com/watch?v=zxIBRXfAJbQ"
                target="_blank"
              >
                What is home automation?
              </Button>
            </Col>
          </Row>
          </Container>
        </div>
        <div className="section section-dark text-right" id="marketing">
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="text-center" md="5">
                <a href="" target="_blank">
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/marketing.jpg")}
                    style={{ width: "100%" }}
                  />
                </a>
                <Button
                  className="btn-round mr-1 mt-2"
                  type="button"
                  color="default"
                  href="/landing-page-example"
                  target="_blank"
                >
                  Landing Page
                </Button>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <h2 className="title">Digital Marketing
                <div className="icon icon-info">
                  <i className="nc-icon nc-money-coins" />
                </div>
                </h2>
                <h5 className="description" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  Elevate your digital strategy with our extensive expertise in marketing. At Riquel Tech Solutions,
                  we not only offer customized solutions to enhance your online visibility and
                  achieve your business goals, but we also provide a comprehensive
                  set of services designed to boost your presence on social media and the web.
                  From creating and managing posts and brand content to implementing
                  strategies to grow your followers and customers across various platforms, our
                  team is ready to help you stand out in the digital world and achieve the
                  desired success.
                </h5>
                <br />
{      /*          <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Detalles sobre nuestros servicios
                </Button>*/}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Phone</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Teléfono" type="text" value={"+541169018596"} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" value={"nicolasriquelme528@gmail.com"} ></Input>
                      </InputGroup>
                    </Col>
                  </Row>
{/*                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />*/}
{/*                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>*/}
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <RiquiFooter />
    </>
  );
}

export default InglishServicesPage;
