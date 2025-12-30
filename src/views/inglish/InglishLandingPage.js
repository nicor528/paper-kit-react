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
import RiquiFooter from "components/Footers/RiquiFooter";
import { Link, NavLink } from "react-router-dom";
import InglishRiquiTechNavBar from "components/Inglish Navbars/inglish-riquitech-navbar";
import InglishLandingPageHeader from "components/Inglish Headers/InglishLandingPageHeader";

function InglishLandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <InglishRiquiTechNavBar />
      <InglishLandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">A bit about us</h2>
                <h5 className="description">
                Forging the future in the digital world: Riqui Techs. Our startup, led by a 
                professional with 9 years of experience and nearly 2 years dedicated to application 
                development, merges the freshness of new ideas with the solidity of experience. Since our 
                foundation, we have been making a significant impact in the digital ecosystem, offering innovative 
                solutions in web pages, custom software, and cloud services. As pioneers in web3 technology and robotics, 
                we are at the forefront of the decentralized revolution, harnessing the potential of blockchain, 
                cryptocurrencies, and robotics. With a team of passionate experts, we are ready to tackle any technological 
                challenge and provide valuable insights to your growing business. At Riqui Techs, we are committed to 
                excellence and innovation, leading the way to a bright digital future.
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
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-badge" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Landing pages or presentation pages</h4>
                    <p className="description">
                    Boost your online presence with our custom landing pages. Fast, effective, and designed 
                    to capture the attention of your potential customers.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bag-16" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">E-commerce Pages or Electronic Sales</h4>
                    <p className="description">
                    Boost your online presence with our custom e-commerce pages. Designed to adapt to your business needs, 
                    these pages are your gateway to the digital world of commerce.</p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in#landing" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Development of New Ideas</h4>
                    <p>
                    Turn your ideas into reality with our development service. Innovation and experience working 
                    together to make the impossible possible.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in#newideas" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics and Data Analysis</h4>
                    <p>
                    Discover valuable insights with our data analysis service. Transform numbers into powerful insights 
                    to drive your business towards success.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in#data" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-settings-gear-65" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Robotics and Home Automation</h4>
                    <p>
                    Automate your home or office with our expertise in robotics and home automation. 
                    Smart solutions to make your life more comfortable and efficient.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in#robotica" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-money-coins" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Digital Marketing</h4>
                    <p>
                    Elevate your digital strategy with our expertise in marketing. 
                    Customized solutions to increase your visibility and achieve your goals.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in#marketing" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3" className="text-center">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Graphic Design</h4>
                    <p>
                    We turn your vision into visual reality. From logos to striking images, our 
                    graphic design service brings your ideas to life with creativity and professionalism.
                    </p>
                    <Button className="btn-link" color="info">
                      <NavLink to="/services-page-in" tag={Link} target="">
                      See more
                      </NavLink>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="8">
{             /* <SectionCarouselServices></SectionCarouselServices>*/}
              </Col>
            </Row>
          </Container>

        </div>
{   /*     <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Quines somos</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="/profile-page-nico" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/nico.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="/profile-page-nico" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Nicolás Riquelme</CardTitle>
                        <h6 className="card-category">CEO y desarrollador</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Nicolas Riquelme, CEO y desarrollador de Riqui Techs, 
                    valora profundamente el trabajo en equipo como un pilar 
                    fundamental para alcanzar el máximo potencial y el éxito 
                    tanto de la compañía como de sus clientes.
                    </p>
                    <NavLink to="/profile-page-nico" tag={Link} target="">
                      See more
                    </NavLink>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#Nicolas twitter"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#Nicolas Gmail"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#Nicolas linkedin"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/brian.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Brian Carbajal</CardTitle>
                        <h6 className="card-category">Experto en Marketing</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    "En marketing, el éxito se logra cuando cada estrategia y 
                    esfuerzo se combinan armoniosamente, como notas en una melodía. 
                    Ningún esfuerzo individual puede igualar el impacto de una campaña bien 
                    orquestada.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/julian.JPG")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Julian Ferreyra</CardTitle>
                        <h6 className="card-category">Account Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Tu socio en el éxito empresarial. Como account manager, 
                    estoy aquí para fortalecer nuestra relación, comprender tus necesidades y 
                    brindarte soluciones personalizadas que impulsen el crecimiento de tu negocio.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>*/}
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

export default InglishLandingPage;
