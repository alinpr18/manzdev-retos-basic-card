import React from "react";
import "../css/Main.css";

export default function Main() {
  return (
    <main>
      <h1 className="profile-name">
        <div className="name loading-skeleton"></div>
        <div className="city loading-skeleton"></div>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi
        ea eligendi natus illo quo dolores dolor culpa labore cumque, ipsa,
        sapiente nisi ipsam soluta suscipit necessitatibus sequi animi itaque?
      </p>
      <button>
        <a href="">Follow</a>
      </button>
    </main>
  );
}
