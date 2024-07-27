import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile";
import IsPrivate from "./components/IsPrivate";
import LoginPage from "./pages/LoginPage"
import FeedPage from "./pages/FeedPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
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
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
