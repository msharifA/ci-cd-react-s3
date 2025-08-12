import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page with all its glamour</h2>;
}
function About() {
  return <h2>About Page</h2>;
}
export default function App() {
  return (
    <Router>
      <nav>
        <Link to ="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<About />} />
      </Routes>
    </Router>
  );
}
  

