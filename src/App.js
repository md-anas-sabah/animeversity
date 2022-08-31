import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login-or-signup" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
