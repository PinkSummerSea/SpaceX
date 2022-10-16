import { useState } from "react";
import "./LaunchCard.css";
import { Row, Col } from "react-bootstrap";
import { IoMdRocket } from "react-icons/io";
import { VideoModal } from "../VideoModal/VideoModal";

export const LaunchCard = ({ launch }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const defaultImgUrl =
    "https://www.spacex.com/static/images/backgrounds/demo2patch_final.png";
  const readableDate = (dateStr) => {
    return new Date(dateStr).toDateString().split(" ").slice(1).join(" ");
  };

  const openVideo = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Row className="LaunchCard shadow-lg pb-3 align-items-center justify-content-center">
        <Row id="header">
          <Col md={4}>
            <Col></Col>
          </Col>
          <Col md={8}>
            <Row className="text-wrapper">
              <Col className="success">
                {launch.launch_success ? "SUCCESSFUL " : "UNSUCCESSFUL "}
                <IoMdRocket />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
        <hr id="hr" />
        <Row className="align-items-center justify-content-center">
          <Col md={4}>
            <Col className="patch-wrapper">
              <img
                src={launch.links.mission_patch || defaultImgUrl}
                className="patch"
                alt="mission patch"
              />
            </Col>
          </Col>
          <Col md={8}>
            <Row className="text-wrapper">
              <Col>
                <h4 className="mb-3 mt-2 fw-bold mission-name">
                  {launch.mission_name || "Unknown"}
                </h4>
                <p className="desc">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words.
                </p>
              </Col>
              <Col className="info">
                <p>
                  <span>Launch Date:</span>{" "}
                  {launch.launch_date_local
                    ? readableDate(launch.launch_date_local)
                    : "Unknown"}
                </p>
                <p>
                  <span>Launch Site:</span>{" "}
                  {launch.launch_site.site_name || "Unknown"}
                </p>
                <p>
                  <span>Rocket Type:</span>{" "}
                  {launch.rocket.rocket_name || "Unknown"}
                </p>
                <button className="button" onClick={openVideo}>
                  Watch Video
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <VideoModal
        show={modalOpen}
        onHide={() => setModalOpen(false)}
        launch={launch}
      />
    </>
  );
};
