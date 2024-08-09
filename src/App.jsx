import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./components/Profile";
import IsPrivate from "./components/IsPrivate";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import EditAttraction from "./pages/EditAttractionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        ></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/edit/:id" element={<EditAttraction />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
