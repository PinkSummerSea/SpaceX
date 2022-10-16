import "./Footer.css";
import { IoMdRocket } from "react-icons/io";
import { BsTwitter, BsYoutube, BsFacebook, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="Footer d-flex flex-column justify-content-center align-items-center py-5 gap-5">
      <div>
        <IoMdRocket /> SPACEX &copy; 2022
      </div>
      <div className="d-flex icons mb-3">
        <a
          href="https://twitter.com/SpaceX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.youtube.com/c/spacex"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="https://www.facebook.com/spacenewsx/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://github.com/SpaceXLand/api"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};
