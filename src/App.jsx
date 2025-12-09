import ProfileCard from "./ProfileCard.jsx";
import ProjectCard from "./ProjectCard.jsx";
import {user, projects} from "./data.js";
import "./style.css";

function App(){
  return(
    <div className="app">
      <h1 className="title">My Profile Dashbord</h1>
      <ProfileCard 
      name={user.name}
      role={user.role}
      location={user.location}
      skills={user.skills}
      profilePic={user.profilePic}
      />
      
      <h2 className="sectionTitle">My Projects</h2>
      <div className="projectsContainer">
        {projects.map((p)=>(
          <ProjectCard 
          key={p.id}
          title={p.title}
          description={p.description}
          tech={p.tech}
          image={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;