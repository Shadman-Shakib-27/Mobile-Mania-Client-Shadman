"use client";
import React, { useEffect } from "react";

const ScrollBar = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const scrollPercentage = () => {
    const scrollProgress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value");
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (pos === 0) {
      if (scrollProgress) scrollProgress.style.display = "none";
    } else {
      if (scrollProgress) scrollProgress.style.display = "";
      const scrollValue = Math.round((pos * 100) / calcHeight);
      const valueContent = "⇧";
      if (scrollProgress) {
        scrollProgress.style.background = `conic-gradient(#22A1F0 ${scrollValue}%,#FFFFFF ${scrollValue}%)`;
      }
      if (progressValue) {
        progressValue.textContent = `${valueContent}`;
      }
    }
  };

  useEffect(() => {
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;
    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []);

  return (
    <div>
      <div
        id="progress"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          height: "40px",
          width: "40px",
          border: "1px solid black",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1000,
          background: "conic-gradient(#22A1F0 0%, #22A1F0 0%)",
        }}
        onClick={scrollToTop}
      >
        <span
          id="progress-value"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "20px",
          }}
        ></span>
      </div>
    </div>
  );
};

export default ScrollBar;
