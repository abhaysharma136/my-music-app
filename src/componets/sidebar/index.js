import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import {MdFavorite, MdSpaceDashboard} from "react-icons/md"
import {FaGripfire,FaPlay, FaSignOutAlt} from "react-icons/fa"
import {IoLibrary} from "react-icons/io5"
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://external-preview.redd.it/LnBC2bCGSk5ri9hUi8QFvlf75Fb1Cp5wtD66280QpvQ.jpg?auto=webp&s=39e301f912a91f141574147f2c6afa2b1483e92b"
        className="profile-img"
        alt="profile-pic"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  );
}
