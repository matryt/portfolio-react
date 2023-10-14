import "../styles/Project.css"

export default function Project({name, image, link}) {
    return (
        <a href={link}>
            <div className="project">
            
            <img src={image} alt={name} />
            <div className="name-container">
                <p className="project-name">{name}</p>
            </div>
            
    </div>
        </a>
        
    )
}