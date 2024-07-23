import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <h1>Wander Wise NAVBAR</h1>
      <Routes>
        <Route path="/" element={<SignUpPage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
      <h1>Wander Wise FOOTER</h1>
    </>
  );
}

export default App;
