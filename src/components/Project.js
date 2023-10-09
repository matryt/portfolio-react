import "../styles/Project.css"

export default function Project({name, image}) {
    return (
        <div className="project">
            <img src={image} alt={name} />
            <div className="name-container">
                <p className="project-name">{name}</p>
            </div>
        </div>
    )
}