/*!


*/
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import FortuneWheel from "views/IndexSections/CareerWheelComps/FortuneWheel.js";
import ReorderList from "../IndexSections/CareerWheelComps/ReorderList.js";

// reactstrap components
import { Button, Card, Input, Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="career-wheel-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3"></Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0"></div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>Career Wheel</h3>
                    <div className="h6 mt-4">Instructions</div>
                    <div className="h6 font-weight-300">
                      Spin the wheel and type out as many careers and skills as
                      you
                    </div>
                    <div className="h6 font-weight-300">
                      can and match them all up by dragging and droppping your
                      entries.
                    </div>
                  </div>
                  <div className=" border-top text-center">
                    <Row className="justify-content-center">
                      <FortuneWheel />
                    </Row>
                  </div>
                </div>
                <div>
                  <ReorderList />
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
