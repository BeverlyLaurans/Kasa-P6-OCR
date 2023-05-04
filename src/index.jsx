import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LocationDetails from "./pages/LocationDetails/LocationDetails";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import "./styles/index.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/à-propos" element={<About />} />
        <Route path="/locations/:locationId" element={<LocationDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)