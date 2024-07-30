import Navbar from "../components/Navbar";
import "./Homepage.css"

const HomePage = () => {
  return (
  <div>
  <Navbar/>
  <div className="homepage-container">
    <h1>Welcome to Wander Wise</h1>
    <br></br>
    <p>Your companion for discover local attractions, saving your favourite spots, and sharing reviews with fellow travelers. Join us on an adventure and strat exploring the world around you today!</p>
  </div>
  </div>
)};

export default HomePage;
