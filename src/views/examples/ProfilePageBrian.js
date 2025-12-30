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
      <ExamplesNavbar />
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
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>
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
                    Aptitudes
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
                        {/*<Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>*/}
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/react.js-img.png")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Desarrollador Front-End <br />
                            <small>Coder Hause</small>
                          </h6>
                        </Col>
{/*                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>*/}
                      </Row>
                      <hr />

                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="1" id="following">
              <Row>
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
              </Row>
              <hr />
              <Row>
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
              </Row>
              <hr />
              <Row>
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
              </Row>
              <hr />
              <Row>
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
              </Row>
              <hr />
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <RiquiFooter />
    </>
  );
}

export default ProfilePageRiqui;
