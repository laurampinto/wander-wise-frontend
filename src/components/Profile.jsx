import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth.context";
import Navbar2 from "./Navbar-2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/Profile.css";
import { API_URL } from "../config";

const Profile = () => {
  const ourContext = useContext(AuthContext);
  console.log("here is the name", ourContext);

  const [attractionTitle, setAttractionTitle] = useState("");
  const [attractionCity, setAttractionCity] = useState("");
  const [attractionTypeOf, setAttractionTypeOf] = useState("");
  const [attractionDescription, setAttractionDescription] = useState("");
  const [attractionImage, setAttractionImage] = useState("");

  const nav = useNavigate();

  const handleAttractionTitle = (e) => setAttractionTitle(e.target.value);
  const handleAttractionCity = (e) => setAttractionCity(e.target.value);
  const handleAttractionTypeOf = (e) => setAttractionTypeOf(e.target.value);
  const handleAttractionDescription = (e) =>
    setAttractionDescription(e.target.value);
  const handleAttractionImage = (e) => setAttractionImage(e.target.value);

  const handleAddAttraction = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/api/attractions`, {
        title: attractionTitle,
        city: attractionCity,
        typeOf: attractionTypeOf,
        description: attractionDescription,
        image: attractionImage,
      })
      .then((response) => {
        console.log("attraction created:", response.data);
        nav("/feed");
      })
      .catch((error) => {
        console.log("Error creating attraction", error);
      });
  };

  return (
    <div>
      <Navbar2 />
      <h2>{ourContext.user.name}, you can add a new attraction here </h2>

      <form onSubmit={handleAddAttraction} className="form-container">
        <label>
          Title:
          <input
            type="text"
            value={attractionTitle}
            onChange={handleAttractionTitle}
            placeholder="title"
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={attractionCity}
            onChange={handleAttractionCity}
            placeholder="city"
            required
          />
        </label>
        <label>
          Type of:
          <select
            value={attractionTypeOf}
            onChange={handleAttractionTypeOf}
            required
          >
            <option value="Park">Park</option>
            <option value="Museum">Museum</option>
            <option value="Landscape">Landscape</option>
            <option value="Monument">Monument</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            value={attractionDescription}
            onChange={handleAttractionDescription}
            placeholder="description"
            required
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={attractionImage}
            onChange={handleAttractionImage}
          />
        </label>

        <button className="button-addAttraction" type="submit">
          Add Attraction
        </button>
      </form>
    </div>
  );
};
export default Profile;
