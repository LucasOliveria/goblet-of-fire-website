import "./styles.css";
import videoFireHome from "../../videos/fire.mp4";

function VideoHome() {
  return (
    <video className="video-fire-home" key={videoFireHome} autoPlay loop muted>
      <source src={videoFireHome} type="video/mp4" />
    </video>
  )
}

export default VideoHome;