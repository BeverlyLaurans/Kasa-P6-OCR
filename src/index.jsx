import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LocationDetails from "./pages/LocationDetails/LocationDetails";
import ErrorPage from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
// import "./styles/index.scss";
import "./styles/css/style.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/à-propos" element={<About />} />
        <Route exact path="/locations/:locationId" element={<LocationDetails />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);