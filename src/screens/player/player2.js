import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../../componets/audioPlayer";
import Queue from "../../componets/queue";
import SongCard from "../../componets/songCard";
import Widgets from "../../componets/widgets/index";
import apiClient from "../../spotify";
import "./player.css";
export default function Player2() {
  const location = useLocation();
  console.log(location)
  const [tracks, setTracks] = useState([]);
  console.log(tracks);
  
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("me/top/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
        />
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
