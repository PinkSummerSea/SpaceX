import Modal from "react-bootstrap/Modal";
import "./VideoModal.css";

export const VideoModal = (props) => {
  const getYoutubeId = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
  };

  // If the launch object does not have a YouTube video link, we will play the live video of SpaceX.
  
  const defaultVideoLink = "https://www.youtube.com/embed/gN50Gj7zejY";

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="my-modal"
    >
      <div id="video-container">
        <iframe
          class="responsive-iframe"
          src={
            props.launch.links.video_link
              ? `https://www.youtube.com/embed/${getYoutubeId(
                  props.launch.links.video_link
                )}`
              : defaultVideoLink
          }
          title="Rocket Launch"
          allowFullScreen="true"
        ></iframe>
      </div>
    </Modal>
  );
};
