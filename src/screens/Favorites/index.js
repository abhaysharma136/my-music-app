import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import './favorites.css';
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



export default function Favorites() {
  const [favourites,setFavourites]=useState([]);
  useEffect(()=>{
    apiClient.get(`me/top/tracks`).then(function (response) {
      setFavourites(response.data.items);
      console.log(response);
    });
  },[])

  const navigate=useNavigate();
  const playPlaylist=(id)=>{
    navigate('player',{state:{id:id}})
  }

  return <div className="screen-container ">
    <div className="favorite-body">
      {favourites?.map((favourite)=>(
        <div className="favourite-song-card flex" key={favourite.id} onClick={()=>playPlaylist(favourite.id)}>
          <img src={favourite.album.images[0].url} alt="Albumimage" className="favourite-tracks-image"/>
          <div><p className="favorite-track-name">{favourite.name}</p>
          <p className="favourite-track-artist">{favourite.artists[0].name}</p></div>
          <div className="favorites-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
        </div>
      ))}
    </div>
  </div>;
}
