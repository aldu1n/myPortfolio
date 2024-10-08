import "./App.css";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div id="sidebar">
        <ul>
          <li>
            <a href="">
              <i class="bi bi-house-fill"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-file-person-fill"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-briefcase-fill"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-envelope-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="container">
        <div id="hero">
          <h1>
            <span>Bogdan </span>
            <span>Tkachuk</span>
          </h1>
          <p>Front End Developer</p>
          <p>Full Stack Developer</p>
          <p>MERN Stack</p>
        </div>
        <Player
          autoplay
          loop
          src="https://lottie.host/c27d8f1a-7cf1-4f0c-b392-c98fd4691189/IcKDJLvnI0.json"
          style={{ height: "250px", width: "250px" }}
        >
        </Player>

        <section id="about-me">
          <div id="me">
            <h2>About Me</h2>
            <p>Hi, Bla Bla Bla</p>
          </div>
        </section>
      </div>
    </>
  );
}
