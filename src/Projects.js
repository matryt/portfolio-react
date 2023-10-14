import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import radio from "./img/radio.jpg";

function Projects() {
    return (
        <div className="App">
        <Nav />
        <Header subtitle={"Projets"}/>
        <h3>I) Python</h3>
        <Project name="Lecture de radios" image={radio} link="/projects/python/radio"/>
        </div>
    );
    }

export default Projects;