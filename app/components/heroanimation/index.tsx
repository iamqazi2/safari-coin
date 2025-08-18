"use client";
import React from "react";
import "./lines.css"; // We'll handle animations here

const Lines = () => {
  return (
    <div className="refokus-lines">
      {/* Vertical lines */}
      <div className="line vertical"></div>
      <div className="line vertical"></div>
      <div className="line vertical"></div>

      {/* Horizontal lines */}
      <div className="line horizontal"></div>
      <div className="line horizontal"></div>
      <div className="line horizontal"></div>
    </div>
  );
};

export default Lines;
