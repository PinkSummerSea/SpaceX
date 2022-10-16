import "./LaunchList.css";
import { Container } from "react-bootstrap";
import { useLaunches } from "../../hooks/useLaunches";
import { LaunchCard } from "../LaunchCard/LaunchCard";
import { Substitute } from "../Substitute/Substitute";

export const LaunchList = () => {
  const { loading, error, data } = useLaunches(10, "desc", "launch_date_local");

  if (loading) {
    return <Substitute status={"loading"} />;
  }

  if (error) {
    console.log(error);
    return <Substitute status={"error"} />;
  }

  return (
    <div className="LaunchList" id="launches">

      {/* The blur divs below are color blocks to make the gradient background looks more vibrant */}

      <div className="blur2" style={{ top: "0%", right: "0rem" }}></div>
      <div className="blur4" style={{ top: "10%", left: "-10%" }}></div>
      <div className="blur" style={{ top: "50%", left: "20%" }}></div>
      <div className="blur3" style={{ top: "70%", left: "40%" }}></div>

      <Container className="top">
        {data.launchesPast.map((l) => (
          <LaunchCard key={l.id} launch={l} />
        ))}
      </Container>
    </div>
  );
};
