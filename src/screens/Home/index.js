import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../componets/sidebar";
import Favorites from "../Favorites";
import Feed from "../Feed";
import Library from "../library";
import Player from "../player";
import Trending from "../Trending";
import "./home.css";
export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}
