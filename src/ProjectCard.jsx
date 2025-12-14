function ProjectCard({ title, description, tech, image, link }) {

  const CardContent = (
    <>
      <img src={image} alt={title} className="projectPic" />
      <div className="projectInfo">
        <h2>{title}</h2>
        <p className="muted">{description}</p>
        <div className="projectTech">
          {tech.map((tec, index) => (
            <span key={index} className="techBadge">{tec}</span>
          ))}
        </div>
      </div>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card projectCard"
    >
      {CardContent}
    </a>
  ) : (
    <div className="card projectCard">
      {CardContent}
    </div>
  );
}
export default ProjectCard;