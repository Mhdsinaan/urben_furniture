
import home from "../assets/images/home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="relative w-screen h-screen ">
        <img className="w-full h-full " src={home} alt="Home" />
      </div>
      <div>
       <Link to={'/Living'}><h1>living</h1></Link> 
        <Link to={'/Dining'}><h1>dining</h1></Link>
        <Link to={'/Bedroom'}><h1>Bedroom</h1></Link>
       

      </div>
    </div>
  );
}

export default Home;
