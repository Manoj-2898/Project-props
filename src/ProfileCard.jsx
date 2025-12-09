
function ProfileCard({name,role,location,profilePic,skills}){
  return(
    <>
    <div className="card profileCard">
      <img src={profilePic} alt={name} className="profilePicture" />
      <div className="profileInfo">
        <h2>{name}</h2>
        <p className="muted">{role} • {location} </p>
        <div className="profileSkills">
          {skills.map((skill,index)=>(
            <span key={index} className="skillBadge">{skill}</span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileCard;