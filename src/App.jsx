import "./App.css";

export default function App() {
  return (
    <div>
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
      <div id="hero">
        <div>
          <h1>Hello, my name is Slim Shady</h1>
          <p>Front End Developer</p>
        </div>
      </div>
    </div>
  );
}
