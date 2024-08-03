import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar-2";
import axios from "axios";
import "./FeedPage.css";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  const [attractions, setAttractions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/attractions")
      .then((response) => {
        setAttractions(response.data);
      })
      .catch((error) => {
        console.log("Error fetching attractions:", error);
      });
  }, []);

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
      <Navbar2 />
      <br />
      <h1>All attractions...</h1>
      <div className="attraction-container">
        {attractions.map((attraction) => (
          <div key={attraction._id} className="attraction-card">
            <img
              className="card-img"
              src={attraction.imageUrl}
              alt={attraction.title}
            />
            <h2>{attraction.title}</h2>
            <p>{attraction.city}</p>
            <p>{attraction.typeOf}</p>
            <p>{attraction.description}</p>

            <div>
              <h3>Comments</h3>
              {attraction.comments && attraction.comments.length > 0 ? (
                <ul>
                  {attraction.comments.map((comment) => (
                    <li key={comment._id}>
                      <p>{comment.content}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="backProfileButton" onClick={handleNavigateToProfile}>
        Back to profile
      </button>
    </div>
  );
};

export default FeedPage;
