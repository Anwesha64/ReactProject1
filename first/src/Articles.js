// src/Articles.js
import React from "react";
import "./Articles.css"; // Optional for styling

function Articles() {
  return (
    <div className="articles-page">
      <h2>Women's Health Articles</h2>
      <ul className="article-list">
        <li>🩺 10 Essential Health Tips for Women in Their 20s</li>
        <li>💪 Managing Hormonal Balance Naturally</li>
        <li>🥗 Nutrition Guide for Pregnant Women</li>
        <li>🧘‍♀️ Mental Wellness and Self-Care Routines</li>
        <li>🏥 Recognizing Early Signs of Breast Cancer</li>
        <li>🌸 PCOS: Symptoms, Causes & Management</li>
      </ul>
    </div>
  );
}

export default Articles;
