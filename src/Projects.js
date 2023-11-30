import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import radio from "./img/radio.jpg";
import fruits from "./img/fruits.jpeg";
import tarot from "./img/tarot.png";
import {useEffect, useRef} from "react";

function Projects() {
    const ProjectsRefPython = useRef(null);
    const ProjectsRefJava = useRef(null);
    useEffect(() => {
        const handleResize = () => {
          let cardsPython = document.querySelectorAll(".python");
          let cardsJava = document.querySelectorAll(".java");
          let wdPython = Math.min(Math.floor(window.innerWidth / 320) * 320, 320*cardsPython.length);
          let wdJava = Math.min(Math.floor(window.innerWidth / 320) * 320, 320*cardsJava.length);
          console.log(cardsPython)
          if (ProjectsRefPython.current) {
            ProjectsRefPython.current.style.width = wdPython + "px";
          }
          if (ProjectsRefJava.current) {
            ProjectsRefJava.current.style.width = wdJava + "px";
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
        <div className="projects" ref={ProjectsRefPython}>
            <Project cls="python" name="Lecture de radios" image={radio} link="/projects/python/radio"/>
            <Project cls="python" name="Données alimentaires" image={fruits} link="/projects/python/aliments"></Project>
        </div>
        <h3>II) Java</h3>
        <div className="projects" ref={ProjectsRefJava}>
            <Project cls="java" name="Jeu de tarot" image={tarot} link="/projects/java/tarot"/>
        </div>
        </div>
    );
    }

export default Projects;