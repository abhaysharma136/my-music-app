import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";
export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
