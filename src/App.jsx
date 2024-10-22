import "./App.css";
import ProjectCard from "./components/ProjectCard";
import City from "./components/City";
import { useEffect, useRef, useState } from "react";
// Lenis, gsap
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
//Lottiefile
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function App() {
  let aboutMeLeft = useRef(null);
  let aboutMeRight = useRef(null);
  let sidebar = useRef(null);
  let triggerSection = useRef(null);

  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    gsap.set(aboutMeLeft, {
      xPercent: -100,
      opacity: 0,
    });
    gsap.set(aboutMeRight, {
      xPercent: 100,
      opacity: 0,
    });

    gsap.to(aboutMeLeft, {
      scrollTrigger: {
        trigger: aboutMeLeft,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: 0,
      opacity: 1,
    });
    gsap.to(aboutMeRight, {
      scrollTrigger: {
        trigger: aboutMeRight,
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: 0,
      opacity: 1,
    });
    gsap.to(sidebar, {
      scrollTrigger: {
        trigger: triggerSection,
        start: "top bottom",
        end: "top 80%",
        markers: true,
        scrub: 1,
      },
      xPercent: -250,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionTop + sectionHeight > window.innerHeight / 2
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth Scrolling Setup
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 700);
  });
  gsap.ticker.lagSmoothing(0);

  const lightsOn = (e) => {
    if (e.target.classList.contains("window")) {
      e.target.classList.toggle("light_on");
    }
  };

  const submitBtn = (e) => {
    e.preventDefault();
  };

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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        id="sidebar"
        ref={(el) => {
          sidebar = el;
        }}
      >
        <ul>
          <li>
            <a href="#home" className={activeLink === "home" ? "active" : ""}>
              <i className="bi bi-house-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="#about_me"
              className={activeLink === "about_me" ? "active" : ""}
            >
              <i className="bi bi-file-person-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "projects" ? "active" : ""}
            >
              <i className="bi bi-briefcase-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? "active" : ""}
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="container">
        <div id="hero">
          <div id="name_box">
            <h1>
              <span>Hi, I am</span>
              <span>Bogdan</span>
            </h1>
            <p>Front End Developer</p>
            <p>Full Stack Developer</p>
            <p>MERN Stack</p>
          </div>
        </div>
        <div className="lottie_container">
          <Player
            autoplay
            loop
            src="https://lottie.host/df580c85-3134-4824-b227-52a08138634b/Z6yQlzbtTP.json"
            style={{ height: "100px", width: "100px", color: "(255,255,255)" }}
          ></Player>
        </div>

        <section
          id="about_me"
          ref={(el) => {
            triggerSection = el;
          }}
        >
          <h2>About Me</h2>
          <div
            ref={(el) => {
              aboutMeLeft = el;
            }}
            className="about_sm_container move_left"
          >
            <p>
              Hello! I’m Bogdan Tkachuk, a passionate web developer dedicated to
              creating seamless and engaging digital experiences. With a
              background in front-end web development, I specialize in building
              responsive websites that not only look great but also perform
              exceptionally.
            </p>
          </div>
          <div id="code_picture"></div>
          <div
            ref={(el) => {
              aboutMeRight = el;
            }}
            className="about_sm_container align_right move_right"
          >
            <p>
              My journey into web development began with a curiosity for how
              things work behind the scenes. I’ve honed my skills in HTML, CSS,
              JavaScript, React, and I thrive on turning ideas into reality
              through clean, efficient code.
            </p>
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

        <section id="projects">
          <h2>My Projects</h2>
          <div id="project_container"></div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <div id="contact_box">
            <form>
              <div className="input_container">
                <label for="fullName">Full Name</label>
                <input type="text" name="fullName" id="full_name"></input>
              </div>
              <div className="input_container">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"></input>
              </div>
              <div className="input_container">
                <label for="fullName">Message</label>
                <textarea
                  title="message"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              <button id="submit_btn" type="submit" onClick={submitBtn}>
                <i className="bi bi-send-fill"></i>
                Send Message
              </button>
            </form>
            <div id="social_container">
              <div id="social_box">
                <h2>Social</h2>
                <div id="social_icons">
                  <a>
                    <i className="bi bi-stack-overflow"></i>
                  </a>
                  <a>
                    <i className="bi bi-github"></i>
                  </a>
                  <a>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
              <img />
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div id="border_bottom"></div>
        <div id="city_box" onClick={lightsOn}>
          <City />
        </div>
        <h4>Made by Bogdan Tkachuk</h4>
      </footer>
    </>
  );
}
