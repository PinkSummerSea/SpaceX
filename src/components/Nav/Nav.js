import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Nav.css";

export const Nav = () => {
  return (
    <Container>
      <Row className="pt-5 Nav white">
        <Col id="nav-wrapper">
          <img src={logo} id="logo" alt="logo" />
          <a className="inline" href="#launches">
            EXPLORE NOW
          </a>
        </Col>
      </Row>
    </Container>
  );
};
