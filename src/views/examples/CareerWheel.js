/*!


*/
import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import FortuneWheel from "views/IndexSections/FortuneWheel.js";


// reactstrap components
import {
  Button,
  Card,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";


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
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      This is a game
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      The Task is: this is a bunch of words meaning something that is to be done somehow
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Steps on how to play: 
                  
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <FortuneWheel />
                    </Row>
                  </div>

                  <div className="mt-5 py-5 border-top text-center">
                    <div className="py-5 bg-secondary">
                      <div>
                        <i className="ni education_hat mr-2" />
                        Can you think of an careers that start with the letter_?
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        Write down as many as you can think of.
                      </div>
                      <Input/>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Add to List
                        </Button>
                      </div>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Submit List
                        </Button>
                      </div>

                    </div>
                  </div>

                
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
