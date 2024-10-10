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
      <nav id="home">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about_me">About</a>
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
            <a href="#home">
              <i class="bi bi-house-fill"></i>
            </a>
          </li>
          <li>
            <a href="#about_me">
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
          style={{ height: "100px", width: "100px" }}
        ></Player>
        <div className="border"></div>

        <section id="about_me">
          <h2>About Me</h2>
          <div className="about_sm_container">
            <h2>About Me</h2>
            <p>Hi, Bla Bla Bla</p>
          </div>
          <div id="code_picture"></div>
          <div className="about_sm_container align_right">
            <h2>About Me</h2>
            <p>Hi, Bla Bla Bla</p>
          </div>
          <div id="tech_container">
            <h2>Technologies and Tools</h2>
            <ul id="tech_ul">
              <li>
                <img src="src\assets\icons\icons8-html.svg" alt="HTML" />
                <p>HTML</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-css.svg" alt="CSS" />
                <p>CSS</p>
              </li>
              <li>
                <img
                  src="src\assets\icons\icons8-javascript.svg"
                  alt="JavaScript"
                />
                <p>JavaScript</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-react-js.svg" alt="React" />
                <p>React</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-node-js.svg" alt="NodeJS" />
                <p>NodeJS</p>
              </li>
              <li>
                <img
                  src="src\assets\icons\icons8-express-js.svg"
                  alt="Express"
                />
                <p>Express</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-jquery.svg" alt="JQuery" />
                <p>JQuery</p>
              </li>
              <li>
                <img
                  src="src\assets\icons\icons8-bootstrap.svg"
                  alt="Bootstrap"
                />
                <p>Bootstrap</p>
              </li>
              <li>
                <img
                  src="src\assets\icons\icons8-tailwind-css.svg"
                  alt="Tailwind CSS"
                />
                <p>Tailwind CSS</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-sass.svg" alt="Sass" />
                <p>Sass</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-mysql.svg" alt="MySQL" />
                <p>MySQL</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-mongodb.svg" alt="MongoDb" />
                <p>MongoDB</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-graphql.svg" alt="GraphQL" />
                <p>GraphQL</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-postman.svg" alt="Postman" />
                <p>Postman</p>
              </li>
              <li>
                <img src="src\assets\icons\icons8-heroku.svg" alt="Heroku" />
                <p>Heroku</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
