import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AnimeList from "./pages/AnimeList";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-or-signup" element={<Login />} />
        <Route path="/anime-list" element={<AnimeList />} />
      </Routes>
    </div>
  );
}

export default App;
