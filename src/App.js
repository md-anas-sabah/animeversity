import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-or-signup" element={<Login />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
