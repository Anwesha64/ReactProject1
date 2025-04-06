import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/Logo.png";
import bgDecor1 from "./assets/temp1.jpg";
import bgDecor2 from "./assets/temp2.jpg";
import womensHealthQueries from "./assets/womens-health-guarantee.jpg";
import womensHealthArticles from "./assets/womens-health-article.jpg";
import Articles from "./Articles";
import ContactUs from "./Contact";

function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="Healthy Women" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/"><b>Home</b></Link></li>
            <li><Link to="/articles"><b>Articles</b></Link></li>
            <li><a href="#"><b>About us</b></a></li>
            {/* 🔧 FIXED: Changed from <a href="#"> to <Link> */}
            <li><Link to="/contact"><b>Contact us</b></Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="hero">
        <h1>Guiding you <br /> to better health <br />and well-being</h1>
        <img src={bgDecor1} alt="Decor" className="decor1" />
      </section>

      {/* Decorative Element in empty space */}
      <img src={bgDecor2} alt="Decor" className="decor2" />

      {/* Are You Looking For Section */}
      <section className="looking-for">
        <h2>Are You Looking For</h2>
        <div className="services">
          <div className="service">
            <img src={womensHealthQueries} alt="Women's Health Related Queries" />
            <p>Women's Health Related Queries</p>
          </div>
          <Link to="/articles" className="service">
            <img src={womensHealthArticles} alt="Women's Health Related Articles" />
            <p>Women's Health Related Articles</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
