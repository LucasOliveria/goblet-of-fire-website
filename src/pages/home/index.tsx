import Form from "../../components/Form";
import NamesList from "../../components/NamesList";
import VideoHome from "../../components/VideoHome";

import "./styles.css";

function Home() {

  return (
    <div className="body">
      <Form />
      <VideoHome />
      <NamesList />
    </div>
  )
}

export default Home
