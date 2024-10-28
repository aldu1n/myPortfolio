import "./ProjectCard.css";

export default function ProjectCard({ name, category, description, imgLink, gitHubLink, deployedLink }) {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${imgLink})` }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  <a href={deployedLink} target=" _blank">
                    Visit <i class="bi bi-arrow-up-right-circle-fill"></i>
                  </a>
                </li>
                <li>
                  <a href={gitHubLink} target=" _blank">
                    Github <i class="bi bi-arrow-up-right-circle-fill"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{name}</h1>
          <h2>{category}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
