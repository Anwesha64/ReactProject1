// src/App.js
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <p className="welcome-text">Welcome,</p>
      <h1 className="main-text">
        Guiding you to <br /> better health and <br />
        <span className="highlight">well-being</span>
      </h1>
      <button className="get-started-btn">
        Get started <span className="arrow"> &gt;</span>
      </button>
    </div>
  );
};

export default App;
