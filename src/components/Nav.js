import "../styles/Nav.css";
import { Link } from "react-router-dom";
import menu from "../img/menu.svg";

export default function Nav() {
    return (
        <nav>
            <div id="menu-container">
            <img src={menu} height="30px" alt="menu"></img>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/projects">Projets</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
}