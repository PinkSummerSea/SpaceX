import "./Substitute.css";
import alien from "../../assets/images/ufo.png";
import rocket from "../../assets/images/rocket.png";

// The Substitute component will show up during the process of fetching data, or when the query returns us errors.

export const Substitute = ({ status }) => {
  return (
    <div className="Substitute d-flex flex-column align-items-center">
      <img
        src={status === "error" ? alien : rocket}
        className="substitute-img"
        alt={status === "error" ? "alien image" : "rocket image"}
      />
      <h2 className="substitute-heading">
        {status === "error" ? "Oh No. Somethign Went Wrong..." : "Here We Go!"}
      </h2>
    </div>
  );
};
