import "./ProjectCard.css";

export default function ProjectCard({
  name,
  description,
  imgLink,
  repoLink,
  deployedLink,
}) {
  return (
    <div className="card">
      <div className="card_inner">
        <div className="box">
          <div className="img_container">
            <img src={imgLink}></img>
          </div>
          <div className="icon">
            <a href={deployedLink} className="iconBox">
              <i className="bi bi-arrow-up-right-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
