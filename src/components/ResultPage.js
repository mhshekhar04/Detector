import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroSticker from "../assets/you.png";
import gaybg from "../assets/gaybg.jpg"; // Import the background image
import "./ResultPage.css";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { wrongAnswers } = location.state || { wrongAnswers: 0 };

  // State for WebSocket live price updates
  const [prices, setPrices] = useState({});

  useEffect(() => {
    // Connect to a public WebSocket endpoint for live crypto prices
    const ws = new WebSocket("wss://ws.coincap.io/prices?assets=bitcoin,ethereum");

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Data example: { bitcoin: "20000.12", ethereum: "1500.34" }
      setPrices((prevPrices) => ({ ...prevPrices, ...data }));
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Clean up on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div
      className="result-page"
      style={{
        backgroundImage: wrongAnswers >= 3 ? `url(${gaybg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {wrongAnswers >= 3 ? (
        <>
          <h1 className="hero-text">🏳️‍🌈 You are a Gay! 🏳️‍🌈</h1>
          <img src={heroSticker} alt="Hero" className="hero-image" />
        </>
      ) : (
        <h1 className="hero-text">🚩 Congratulations! You are straight! 🚩</h1>
      )}

      {/* Live Price Ticker */}
      <div className="price-ticker">
        <h1>
          Bitcoin:{" "}
          {prices.bitcoin
            ? `$${parseFloat(prices.bitcoin).toFixed(2)}`
            : "Loading..."}
        </h1>
        <h1>
          Ethereum:{" "}
          {prices.ethereum
            ? `$${parseFloat(prices.ethereum).toFixed(2)}`
            : "Loading..."}
        </h1>
      </div>

      <button className="restart-button" onClick={() => navigate("/")}>
        Restart Game
      </button>
    </div>
  );
};

export default ResultPage;
