function ProjectCard({title,description,tech,image,link}){
  return(
    <>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card projectCard"
    >
      <img src={image} alt={title} className="projectPic" />
      <div className="projectInfo">
        <h2>{title}</h2>
        <p className="muted">{description}</p>
        <div className="projectTech">
          {tech.map((tec,index)=>(
            <span className="techBadge">{tec}</span>
          ))}
        </div>
      </div>
    </a>
    </>
  );
}

export default ProjectCard;