import { useEffect, useState, useContext } from "react";
import Navbar2 from "../components/Navbar-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth.context";
import "./FeedPage.css"
import { API_URL } from "../config";

const FeedPage = () => {
  const [attractions, setAttractions] = useState([]);
  const [newComment, setNewComment] = useState("");
  const ourContext = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAttractions();
  }, []);

  const fetchAttractions = () => {
    axios
      .get(`${API_URL}/api/attractions`)
      .then((response) => {
        setAttractions(response.data);
      })
      .catch((error) => {
        console.log("Error fetching attractions:", error);
      });
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  const handleDeleteAttraction = (attractionId) => {
    axios
      .delete(`${API_URL}/api/attractions/${attractionId}`)
      .then(() => {
        fetchAttractions();
      })
      .catch((error) => {
        console.log("Error deleting attraction:", error);
      });
  };

  const handleEditAttraction = (attraction) => {
    navigate(`/edit/${attraction._id}`);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (attractionId) => {
    axios
      .post(`${API_URL}/api/comments`, {
        userId: ourContext.user._id,
        attractionId: attractionId,
        content: newComment,
      })
      .then((response) => {
        setNewComment("");
        fetchAttractions();
      })
      .catch((error) => {
        console.log("Error writing a new comment", error);
      });
  };

  return (
    <div>
      <Navbar2 />
      <br />
      <h2>All attractions...</h2>
      <div className="attraction-container">
        {attractions.map((attraction) => (
          <div key={attraction._id} className="attraction-card">
            <img
              className="card-img"
              src={attraction.imageUrl}
              alt={attraction.title}
            />
            <h3>{attraction.title}</h3>
            <p>{attraction.city}</p>
            <p>{attraction.typeOf}</p>
            <p>{attraction.description}</p>
            <br></br>

            <div>
              <h4>Comments</h4>
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

            <div className="comment-area">

            <textarea value={newComment} onChange={handleCommentChange} placeholder="Write your comment..." />
            <button onClick={() => handleCommentSubmit(attraction._id)}>Post comment</button>
            </div>
            <button onClick={() => handleDeleteAttraction(attraction._id)}>
              Delete
            </button>
            <button onClick={() => handleEditAttraction(attraction)}>
              Edit
            </button>
          </div>
        ))}
      </div>

      <button className="backProfileButton" onClick={handleNavigateToProfile}>
        Add attraction
      </button>
    </div>
  );
};

export default FeedPage;
