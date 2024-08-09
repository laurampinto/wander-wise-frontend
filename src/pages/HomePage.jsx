import Navbar from "../components/Navbar";
import "./Homepage.css"

const HomePage = () => {
  return (
  <div>
  <Navbar/>
  <div className="homepage-container">
    <h1>Welcome to wander wise: Your Ultimate Guide to Discovering Attractions!</h1>
    <br></br>
    <p>Are you passionate about exploring new places? Do you love discovering hidden gems in cities in Portugal? Wander wise is here to enhance your travel experience! Join us on an adventure and start exploring today!</p>
    <p>Our community of travelers shares their favorite attractions, complete with detailed descriptions and beautiful images. Get inspired by the experiences of others and find new destinations to explore.</p>
  </div>
  </div>
)};

export default HomePage;
