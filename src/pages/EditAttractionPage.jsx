import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "../components/Navbar-2";
import "./editAttractionPage.css"

const EditAttraction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState({
    title: "",
    city: "",
    typeOf: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/attractions/${id}`)
      .then((response) => {
        setAttraction(response.data);
      })
      .catch((error) => {
        console.log("Error fetching attraction", error);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAttraction((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateAttraction = (event) => {
    event.preventDefault();
    const { title, city, typeOf, description, imageUrl } = attraction;

    axios
      .put(`http://localhost:5005/api/attractions/${id}`, {
        title,
        city,
        typeOf,
        description,
        imageUrl,
      })
      .then(() => {
        navigate("/feed");
      })
      .catch((error) => {
        console.log("Error updating attraction", error);
      });
  };

  return (
    <div>
      <Navbar2 />
      <h2>Edit attraction here...</h2>
      <form onSubmit={handleUpdateAttraction}>
        <input
          type="text"
          name="title"
          value={attraction.title}
          onChange={handleChange}
          placeholder="title"
          required
        />
        <input
          type="text"
          name="city"
          value={attraction.city}
          onChange={handleChange}
          placeholder="city"
          required
        />
        <input
          type="text"
          name="typeOf"
          value={attraction.typeOf}
          onChange={handleChange}
          placeholder="type"
          required
        />
        <input
          type="text"
          name="description"
          value={attraction.description}
          onChange={handleChange}
          placeholder="description"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={attraction.imageUrl}
          onChange={handleChange}
          placeholder="image"
        />
        <button type="submit">Update</button>
      </form>
      <br></br>
      <button onClick={() => navigate("/feed")}>Cancel</button>
    </div>
  );
};

export default EditAttraction;
