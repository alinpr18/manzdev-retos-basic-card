import "./style.css";
import { randomUser } from "./api";

(async function App() {
  return (document.querySelector("#app").innerHTML = /* html */ `
  <header class="picture">
    <picture class="">
      <source media="(max-width: 375px)"
          srcset="https://picsum.photos/450/200" height="150px" width="100%" />
      <img height="200px" class="header-hero " src="https://picsum.photos/450/200" alt="header">
    </picture>
    <img class="header-profile" src=${await randomUser()} alt="profile">
  </header>
  <main>
    <h1 class="profile-name">Nombre de usuario</h1>
    <span>Ciudad, País</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro quis rerum tempore error distinctio ut molestiae. Voluptatibus ipsa in cum rem laboriosam ad praesentium facere porro, vero cumque consectetur.</p>
    <button class="profile-btn">
      <a class="profile-btn-item" href="">Follow</a>
    </button>
  </main>
  <footer>
  <section>
    <article>
      <h2>Posts</h2>
      <div>
        <p>1,200</p>
      </div>
    </article>
    <article>
      <h2>Posts</h2>
      <div>
        <p>1,200</p>
      </div>
    </article>
    <article>
      <h2>Posts</h2>
      <div>
        <p>1,200</p>
      </div>
    </article>
  </section>
  </footer>
`);
})();
