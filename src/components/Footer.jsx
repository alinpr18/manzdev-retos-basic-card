import React from "react";
import "../css/Footer.css";
import { Fa6SolidUsers, DashiconsWelcomeWriteBlog } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <span>Post</span>
        <span>
          <DashiconsWelcomeWriteBlog />
          1.000
        </span>
      </div>
      <div>
        <span>Followers</span>
        <span>
          <Fa6SolidUsers />
          1.000
        </span>
      </div>
      <div>
        <span>Following</span>
        <span>
          <Fa6SolidUsers />
          1.0000
        </span>
      </div>
    </footer>
  );
}
