import React, { useState, useEffect } from "react";
import Requests from "./Api";
import axios from "axios";
import { baseURL } from "./Api/baseURL";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Movies,
  Tvshows,
  Navbar,
  Popular,
  Mylist,
  Footer,
} from "./components";

function App() {
  const ToggleSidebar = useSelector((state) => state.Menu.toggle);
  console.log(ToggleSidebar);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/mylist" element={<Mylist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
