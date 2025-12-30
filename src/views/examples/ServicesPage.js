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
import { useNavigate } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';

function ServicesPage() {
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
      <RiquiTechNavBar />
      <ServicecPageHeader />
      <div className="main">
        <div className="section text-left" id="landing">
          <Container>
            <Row className="d-flex align-items-center">
              <Col className="ml-auto mr-auto" md="7">
                <h2 className="title">Landing pages o paginas de presentación
                <div className="icon icon-info">
                    <i className="nc-icon nc-badge" />
                </div>
                </h2>
                <h5 className="description">
                ¡Eleva tu presencia online con nuestras landing pages personalizadas! En Riquel Tech Solutions, 
                entendemos que la primera impresión es crucial. Es por eso que ofrecemos una amplia gama 
                de diseños cautivadores, creados para adaptarse perfectamente a tu estilo y necesidades. 
                Ya sea que estés lanzando un nuevo emprendimiento, promocionando tu empresa o buscando d
                estacar en la web, nuestras landing pages 
                están diseñadas para impresionar. Son rápidas, efectivas y meticulosamente diseñadas para 
                atraer y retener la atención de tus clientes potenciales. Deja que tu presencia online brille 
                con nuestras landing pages personalizadas.
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
              <Row>
              <a href="https://young-exclusive-shoes.uc.r.appspot.com/" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/shoes.JPG")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-round mr-1 mt-2"
                type="button"
                color="default"
                href="https://young-exclusive-shoes.uc.r.appspot.com/"
                target="_blank"
              >
                E-Commerce
              </Button>
              </Row>
              <Row className="mt-1">
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
              </Row>
            </Col>
            <Col className="ml-auto mr-auto" md="7">
              <h2 className="title">Desarrollo de e-commerce o pagina de ventas electrónicas
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
              </h2>
              <h5 className="description">
              ¡Potencia tus ventas online con nuestras páginas de comercio electrónico personalizadas! En Riquel Tech Solutions, 
              comprendemos la importancia de causar una buena impresión desde el primer momento. Por ello, ofrecemos una 
              amplia variedad de diseños cautivadores, diseñados para adaptarse a tu estilo y necesidades específicas. Ya sea 
              que estés lanzando una nueva tienda en línea, promocionando tus productos o buscando destacarte en el mundo digital, 
              nuestras páginas de comercio electrónico están diseñadas para impresionar. Son rápidas, efectivas y meticulosamente 
              elaboradas para captar y mantener la atención de tus clientes potenciales. Permítenos hacer brillar tu presencia online 
              con nuestras páginas de comercio electrónico personalizadas.
              </h5>
            </Col>
          </Row>
          </Container>
        </div>
        <div className="section text-left" id="newideas">
          <Container>
          <Row className="d-flex align-items-center">
            <Col className="ml-auto mr-auto" md="7">
              <h2 className="title">Desarrollo de nuevas ideas
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
              </h2>
              <h5 className="description">
              Sumérgete en el emocionante mundo de la innovación tecnológica con nuestro servicio integral de desarrollo. 
              En Riquel Tech Solutions, estamos comprometidos a convertir tus ideas en productos digitales tangibles que superen tus expectativas. 
              Desde aplicaciones web cautivadoras hasta plataformas móviles intuitivas, nuestro equipo de desarrolladores altamente capacitados 
              combina la innovación con la experiencia para convertir lo imposible en posible.

              Con un enfoque en la vanguardia tecnológica, integramos conceptos de Web3 y tecnología blockchain para ofrecerte soluciones digitales 
              avanzadas y descentralizadas que marcan la pauta en la industria. Además, aprovechamos el poder de la inteligencia artificial para agregar 
              una capa de inteligencia y automatización a tus aplicaciones, mejorando la experiencia del usuario y optimizando los procesos internos.

              Nuestro proceso de desarrollo se centra en comprender tus necesidades y objetivos comerciales para ofrecerte soluciones personalizadas que se 
              adapten perfectamente a tu visión y requisitos. Desde la concepción hasta la implementación y más allá, te acompañamos en cada paso del camino, 
              asegurándonos de que tu proyecto sea un éxito desde el principio.

              Déjanos ser tu socio en el viaje hacia la transformación digital. Con Riquel Tech Solutions, tus ideas se convertirán en realidad, impulsadas por 
              la innovación, la experiencia y el compromiso con la excelencia.
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
                <h2 className="title">Estadisticas y Análisis de datos
                <div className="icon icon-info">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                </h2>
                <h5 className="description" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Explora un mundo de posibilidades con nuestro servicio especializado en 
                análisis de datos. Sumérgete en la vasta cantidad de información disponible y 
                descubre ideas valiosas que pueden llevar a tu negocio a nuevas alturas de éxito.
                 Desde el análisis de tendencias hasta la identificación de patrones ocultos, 
                 nuestro equipo de expertos transforma datos aparentemente simples en perspectivas 
                 profundas y poderosas. Utilizando las últimas herramientas y técnicas de análisis, 
                 desentrañamos el potencial de tus conjuntos de datos para proporcionarte una
                comprensión clara y completa de tu mercado, clientes y operaciones comerciales. 
                  Con nuestras perspectivas detalladas y recomendaciones estratégicas, estarás mejor 
                  equipado para tomar decisiones informadas y efectivas que impulsen el crecimiento y 
                  la rentabilidad de tu negocio. ¡Déjanos ayudarte a convertir tus datos en una ventaja 
                  competitiva!
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
              <h2 className="title">Robótica y Domótica (Próximamente)
                <div className="icon icon-info">
                  <i className="nc-icon nc-settings-gear-65" />
                </div>
              </h2>
              <h5 className="description">
              Descubre un nuevo nivel de comodidad y eficiencia con nuestras soluciones avanzadas de robótica y domótica. 
              En Riquel Tech Solutions, combinamos la última tecnología en robótica con la domótica inteligente para ofrecerte un ecosistema 
              completamente automatizado que transformará tu hogar u oficina en un espacio moderno y eficiente.

              Nuestro equipo de expertos en robótica y domótica trabaja incansablemente para crear soluciones personalizadas que se adapten 
              perfectamente a tus necesidades y estilo de vida. Desde sistemas de seguridad y control de acceso hasta dispositivos de monitoreo y 
              gestión energética, nuestras soluciones están diseñadas para hacer que tu vida sea más segura, cómoda y conveniente.

              Además, aprovechamos el poder de la inteligencia artificial para agregar una capa adicional de inteligencia a nuestros sistemas, 
              permitiendo una automatización más inteligente y una interacción más intuitiva con tu entorno. Con la integración de IA, nuestras 
              soluciones pueden aprender y adaptarse a tus preferencias y patrones de uso, optimizando constantemente la eficiencia y la comodidad.

              Ya sea que estés buscando mejorar la seguridad de tu hogar, aumentar la eficiencia energética de tu oficina o simplemente simplificar tu 
              vida diaria, nuestras soluciones de robótica y domótica están diseñadas para ayudarte a alcanzar tus objetivos. En Riqui Techs, estamos 
              comprometidos a brindarte soluciones innovadoras que hagan que tu vida sea más fácil y te permitan disfrutar al máximo de tu espacio.
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
                ¿Qué es la domótica?
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
                <h2 className="title">Marketing digital
                <div className="icon icon-info">
                  <i className="nc-icon nc-money-coins" />
                </div>
                </h2>
                <h5 className="description" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  Eleva tu estrategia digital con nuestro amplio expertise en marketing. En Riquel Tech Solutions, 
                  no solo ofrecemos soluciones personalizadas para aumentar tu visibilidad en línea y 
                  alcanzar tus objetivos comerciales, sino que también te brindamos un conjunto integral 
                  de servicios diseñados para potenciar tu presencia en las redes sociales y en la web. 
                  Desde la creación y gestión de publicaciones y contenido de marca hasta la implementación 
                  de estrategias para aumentar tus seguidores y clientes en diversas plataformas, nuestro 
                  equipo está preparado para ayudarte a destacar en el mundo digital y alcanzar el éxito 
                  deseado.
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
              <h2 className="text-center">Contáctanos</h2>
              <Form className="contact-form">
                <Row>
                  <Col md="6">
                    <label>Teléfono</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-mobile" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Teléfono" type="text" value={"+541169018596"} readOnly />
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
                      <Input placeholder="Email" type="text" value={"nicolasriquelme528@gmail.com"} readOnly />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <label>Instagram</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FaInstagram />
                        </InputGroupText>
                      </InputGroupAddon>
                      <a
                        href="https://www.instagram.com/riquitechs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="form-control"
                      >
                        @riquitechs
                      </a>
                    </InputGroup>
                  </Col>
                </Row>
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

export default ServicesPage;
