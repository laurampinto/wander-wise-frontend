import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar-2";
import axios from "axios";
import "./FeedPage.css";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  const [attractions, setAttractions] = useState([]);
  const [editAttraction, setEditAttraction] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAttractions();
  }, []);

  const fetchAttractions = () => {
    axios
      .get("http://localhost:5005/api/attractions")
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
      .delete(`http://localhost:5005/api/attractions/${attractionId}`)
      .then(() => {
        fetchAttractions();
      })
      .catch((error) => {
        console.log("Error deleting attraction:", error);
      });
  };

  const handleEditAttraction = (attraction) => {
    setEditAttraction(attraction);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditAttraction((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateAttraction = (event) => {
    event.preventDefault();
    const { title, city, typeOf, description, imageUrl } = editAttraction;

    axios
      .put(`http://localhost:5005/api/attractions/${editAttraction._id}`, {
        title,
        city,
        typeOf,
        description,
        imageUrl,
      })
      .then(() => {
        fetchAttractions();
        setEditAttraction(null);
      })
      .catch((error) => {
        console.log("Error updating attraction", error);
      });
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

            <button onClick={() => handleDeleteAttraction(attraction._id)}>
              Delete
            </button>
            <button onClick={() => handleEditAttraction(attraction)}>
              Edit
            </button>
          </div>
        ))}
      </div>
      {editAttraction && (
        <div>
          <h2>Edit Attraction</h2>
          <form onSubmit={handleUpdateAttraction}>
            <input
              type="text"
              name="title"
              value={editAttraction.title}
              onChange={handleChange}
              placeholder="title"
              required
            />
            <input
              type="text"
              name="city"
              value={editAttraction.city}
              onChange={handleChange}
              placeholder="city"
              required
            />
            <input
              type="text"
              name="typeOf"
              value={editAttraction.typeOf}
              onChange={handleChange}
              placeholder="type"
              required
            />
            <input
              type="text"
              name="description"
              value={editAttraction.description}
              onChange={handleChange}
              placeholder="description"
              required
            />
            <input
              type="text"
              name="imageUrl"
              value={editAttraction.imageUrl}
              onChange={handleChange}
              placeholder="image"
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}

      <button className="backProfileButton" onClick={handleNavigateToProfile}>
        Back to profile
      </button>
    </div>
  );
};

export default FeedPage;
