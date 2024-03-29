import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

export default function App(){
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/movie-detail" element={<Detail/>} /> 
      </Routes>
    </HashRouter>
  );
}