import "../styles/Project.css"

export default function Project({name, image, link, cls}) {
    let cl = "project " + cls;
    return (
        <a href={link}>
            <div className={cl}>
            
            <img src={image} alt={name} />
            <div className="name-container">
                <p className="project-name">{name}</p>
            </div>
            
    </div>
        </a>
        
    )
}