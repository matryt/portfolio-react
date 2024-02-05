import Header from "./Header";
import Nav from "./Nav";
import {Mentions} from "../Projects";
import "../styles/ProjectDetails.css";
import github_logo from "../img/github/github-mark-white.png";

export default function ProjectDetails(name, language, description, link, mentions = []) {
    return (
        <div className="App" >
            <Nav />
            <Header subtitle={name} />
            <div className="project-details">
                <div className="project-details-content">
                    <div className="project-details-card">
                        <div className="encart">
                            <p>Technologies</p>
                        </div>
                        <p>{language}</p>
                    </div>
                    <div className="project-details-card">
                        <div className="encart">
                            <p>Description</p>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="project-details-card">
                        <div className="encart">
                            <p>Lien vers le dépôt de code</p>
                        </div>
                        <a href={link} target="_blank" rel="noreferrer"><img src={github_logo} alt="Github logo"></img></a>
                    </div>
                </div>
                {mentions.length !== 0 ? Mentions(mentions) : null}
            </div>
        </div>
    );
}

ProjectDetails.defaultProps = {
    mentions: []
}