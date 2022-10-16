import "./Banner.css";
import { Row, Col, Container } from "react-bootstrap";
import { Nav } from "../Nav/Nav";
import TrackVisibility from "react-on-screen";

// TrackVisibility is a component to track if its child is on the screen.
// I use it with animate.css to create some simple animation when the banner's main content comes into view.

export const Banner = () => {
  return (
    <div className="Banner">
      <Nav />
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <Row
              className={
                isVisible
                  ? "animate__animated animate__pulse banner-main"
                  : "banner-main"
              }
            >
              <Col
                lg={7}
                md={11}
                className="d-flex flex-column align-items-center justify-content-center quote-wrapper"
              >
                <h1 className="quote">
                  Rockets Are Cool. There Is No Getting Around That.
                </h1>
                <h5 className="name mt-3 ms-2"> Elon Musk</h5>
                <button className="button-white align-self-start mt-3 ms-1">
                  <a className="white" href="#launches">
                    Rencent Launches
                  </a>
                </button>
              </Col>
            </Row>
          )}
        </TrackVisibility>
        <div id="separator"></div>
      </Container>
    </div>
  );
};
