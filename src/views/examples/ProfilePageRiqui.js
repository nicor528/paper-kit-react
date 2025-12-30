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
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import RiquiTechNavBar from "components/Navbars/riquitech-navbar";
import RiquiFooter from "components/Footers/RiquiFooter";

function ProfilePageRiqui() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <RiquiTechNavBar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/Nicolas Riquelme.JPG")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Nicolás Riquelme <br />
              </h4>
              <h6 className="description">CEO</h6>
              <h6>Desarrollador - Técnico en electrónica - Licenciatura en I.A. y Robótica (en curso)</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Fanatico de los paisajes como el de la foto mas arriba. Tecnico en electronica recibido en el año 2015 y trabajando profesionalmente desde ese mismo año durante 7 seguidos 
                en la empresa "Ituran de Argentina" donde trabaje y lidere multiples proyectos de robotica y manejos de grandes cantidades de datos.
                
              </p>
              <br />
              <p>
                Actualmente estudiando la carrera "Licenciatura en I.A. y Robotica" mientras doy clases dentro del programa "Aprende Programando" perteneciente al Gobierno de la Ciudad de Bs.As.
                Tambien trabajando dentro de ThernLoven, una Startup con casi 2 años de vida y en constante crecimiento, aqui me desempeñe como desarrolador Full-Stack en un principio y ahora
                 mas enfocado en el Back-End.
              </p>
              <br />
              <p>
                Mi ultima experiencia fue clave para poder empezar con este emprendimiento, el cual se basa en soluciones tecnologicas que se adaptan a tus necesidades, desde paginas web, 
                aplicacines mobiles, soluciones roboticas y domoticas, y analisis de datos con inteligencia artificial. 
              </p>
{    /*          <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>*/}
            </Col>
          </Row>
          <h3 className="text-center mb-2">Conocimientos - Habilidades - Estudios</h3>
          <br />
{          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Tecnologías
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Plataformas
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Estudios
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>}
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="2" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/electronica2.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="6" md="4" xs="4">
                          <h6>
                            Técnico en Electrónica <br />
                            <small>Repblica Francesa ETN N°28 D.E. 9
                            </small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/react.js-img.png")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="6" md="4" xs="4">
                          <h6>
                            Desarrollador Front-End <br />
                            <small>Coder Hause</small>
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </li>
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/ia.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="6" md="4" xs="4">
                          <h6>
                            Licenciatura en I.A. y Robótica <br />
                            <small>Universidad Siglo XXI (en curso)</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/aws.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            AWS <br />
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </li>
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/azure1.png")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Azure <br />
                          </h6>
                        </Col>
                      </Row>
                      <hr />
                    </li>
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/gcloud.png")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Google Cloud <br />
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="1" id="following">
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/nodejs.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    Node JS
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4">
                </Col>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/expressjs.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    Express JS
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4">
                </Col>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/react.js-img.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    React JS
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="80"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4">
                </Col>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/mongo.jpg")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    Mongo DB
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="80"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/dynamo.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    DynamoDB
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/firebase.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    Firebase
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="90"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
              <Row>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
                <Col className="mx-auto" lg="1" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/arduino.png")}
                  />
                </Col>
                <Col lg="1" md="4" xs="4" mt="2">
                  <h6>
                    Arduino / C ++
                  </h6>
                </Col>
                <Col lg="6" md="4" xs="4">
                  <Progress
                    max="100"
                    value="90"
                    barClassName="progress-bar-danger"
                  />
                </Col>
                <Col className="mx-auto" lg="2" md="4" xs="4"/>
              </Row>
              <hr />
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <RiquiFooter />
    </>
  );
}

export default ProfilePageRiqui;
