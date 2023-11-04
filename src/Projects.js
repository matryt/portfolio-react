import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import radio from "./img/radio.jpg";
import fruits from "./img/fruits.jpeg";
import {useEffect, useRef} from "react";

function Projects() {
    const ProjectsRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            let projectCards = document.querySelectorAll(".project");
          let wd = Math.min(Math.floor(window.innerWidth / 320) * 320, 320*projectCards.length);
          if (ProjectsRef.current) {
            ProjectsRef.current.style.width = wd + "px";
          }
        };
        handleResize();
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount
    return (
        <div className="App" >
        <Nav />
        <Header subtitle={"Projets"}/>
        <h3>I) Python</h3>
        <div className="projects" ref={ProjectsRef}>
            <Project name="Lecture de radios" image={radio} link="/projects/python/radio"/>
            <Project name="Données alimentaires" image={fruits} link="/projects/python/aliments"></Project>
        </div>
        </div>
    );
    }

export default Projects;