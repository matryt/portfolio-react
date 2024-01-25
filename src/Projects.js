import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import radio from "./img/radio.jpg";
import fruits from "./img/fruits.jpeg";
import tarot from "./img/tarot.png";
import rogue from "./img/rogue.png";
import arduino from "./img/maixduino.png";
import {useEffect, useRef, useState} from "react";

function calculateWidth(cards) {
  return Math.min(Math.floor(window.innerWidth / 330) * 330, 330*cards.length)
}

function Projects() {
  const [ProjectsRef, setProjectsRef] = useState([useRef(null), useRef(null)]);
    useEffect(() => {
        const handleResize = () => {
          const cards = [document.querySelectorAll(".python"), document.querySelectorAll(".java")];
          for (let i = 0; i<ProjectsRef.length; i++) {
            let p = ProjectsRef[i];
            if (p.current) {
              p.current.style.width = calculateWidth(cards[i]) + "px";
            }
          }
        };
        handleResize();
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [ProjectsRef]); // Empty array ensures that effect is only run on mount
    return (
        <div className="App" >
        <Nav />
        <Header subtitle={"Projets"}/>
        <h3>I) Python</h3>
        <div className="projects" ref={ProjectsRef[0]}>
            <Project cls="python" name="Lecture de radios" image={radio} link="/projects/python/radio"/>
            <Project cls="python" name="Données alimentaires" image={fruits} link="/projects/python/aliments" />
            <Project cls="python" name="Jeu rogue-like" image={rogue} link="/projects/python/rogue" />
            <Project cls="python" name="Projet Arduino" image={arduino} link="/projects/python/arduino" />
        </div>
        <h3>II) Java</h3>
        <div className="projects" ref={ProjectsRef[1]}>
            <Project cls="java" name="Jeu de tarot" image={tarot} link="/projects/java/tarot"/>
        </div>
        </div>
    );
    }

export default Projects;