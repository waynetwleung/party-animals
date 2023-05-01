import React, { useState, useEffect } from 'react';
import MapPage from './Pages/MapPage.jsx';
import MainPage from './Pages/MainPage.jsx';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import '../style/input.css';
// 

function App() {
  return (
    <div>
      <h1>Yoo</h1>
      <MainPage/>
    </div>
  );
}

export default App;