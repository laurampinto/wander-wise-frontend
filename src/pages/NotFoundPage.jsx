import "./NotFoundPage.css";
import errorImg from "../assets/error-image.webp";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="notFoundPage">
      <img src={errorImg} alt="error Image" />
      <br></br>
      <br></br>
      <div>
        <p>You are lost...😞</p>
        <button
          className="goToHomePageButton"
          onClick={handleNavigateToHomePage}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
