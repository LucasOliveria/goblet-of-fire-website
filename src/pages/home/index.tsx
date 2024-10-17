import "./styles.css"
import videoFireHome from "../../videos/fire.mp4";
import { FormEvent } from "react";
import HarryPotter from "../../assets/harry-potter.png";

function Home() {
  function handleAddName(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div className="body">
      <div className="form-container">
        <h1>Sorteio Potter</h1>
        {/* <img src={HarryPotter} alt="glass" /> */}
        <form onSubmit={handleAddName}>
          <input type="text" name="name" placeholder="Escreva seu nome..." autoComplete="off" />
          <button>Ok</button>
        </form>
      </div>
      <div className="list-container"></div>
      <video className="video-fire-home" key={videoFireHome} autoPlay loop muted>
        <source src={videoFireHome} type="video/mp4" />
      </video>
    </div>
  )
}

export default Home
