import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import MainPage from "./components/MainPage";
import GameDataPage from "./components/GameDataPage";
import ResultPage from "./components/ResultPage";
import Field from './components/Field';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/gamedata" element={<GameDataPage />} />
        <Route path="/resultpage" element={<ResultPage />} />
        <Route path="/field" element={<Field />} />



      </Routes>
    </Router>
  );
}

export default App;
