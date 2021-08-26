/*!

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import WordSearch from "views/IndexSections/WordSearchComps/WordSearch.js";

import wordSearchStyles from "../IndexSections/WordSearchComps/wordSearchStyles.scss";

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
        <main className="Findaword-page" ref="main">
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
                  <div className="text-center mt-5">
                    <h3>Find a Word</h3>
                    <div className="h6 mt-4">Instructions</div>
                    <div className="h6 font-weight-300">
                      Click on the first letter of the word you found and drag
                      to the last letter to discover each word.
                    </div>
                  </div>
                      <Row className="justify-content-center">
                       
                        <div className={wordSearchStyles}>

                        <WordSearch />
                        </div>
                        
                        </Row>

                     
                </div>
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3"></Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    {/* <div className="card-profile-actions py-4 mt-lg-0">


                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Next Level
                      </Button>


                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Save
                      </Button>
                    </div> */}
                  </Col>
                </Row>
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
