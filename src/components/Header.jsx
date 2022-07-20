import React from "react";
import "../css/Header.css";

const API_RANDOM_USER = "https://randomuser.me/api/";

(async function getRandomUser() {
  try {
    const randomuser = await fetch(`${API_RANDOM_USER}`);
    const { results } = await randomuser.json();

    // Header Profile
    const header_hero = document.querySelector(".header-hero");
    header_hero.classList.remove("loading-skeleton");
    const header_profile = document.querySelector(".header-profile");
    header_profile.classList.remove("loading-skeleton");
    header_profile.setAttribute("src", results[0].picture.large);
    header_profile.setAttribute(
      "alt",
      `${results[0].name.first} ${results[0].name.last}`
    );

    // Name Profile
    const main_profile_name = document.querySelector(".profile-name");
    main_profile_name.innerHTML = `${results[0].name.first} ${results[0].name.last}`;

    // Location Profile
    const location = document.createElement("span");
    location.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
      ></path>
    </svg>
    ${results[0].location.state}, ${results[0].location.country}`;

    // fi
    main_profile_name.appendChild(location);
  } catch (error) {
    throw error;
  }
})();

export default function Header() {
  return (
    <header>
      <img
        src="https://picsum.photos/500?random=1.webp"
        alt="header"
        width="100%"
        height="200px"
        className="header-hero loading-skeleton"
      />
      <img
        src="https://picsum.photos/500?random=1.webp"
        alt=""
        className="header-profile loading-skeleton"
        width="100%"
        height="100px"
      />
    </header>
  );
}
