import "./NotFoundPage.css"
import errorImg from "../assets/error-image.webp";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div>
        <h1>Error 404</h1>
      </div>
      <img src={errorImg} alt="error Image" />
    </div>
  );
};

export default NotFoundPage;
