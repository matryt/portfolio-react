import "../styles/Nav.css";
import menu from "../img/menu.svg";

export default function Nav() {
    return (
        <nav>
            <div id="menu-container">
            <img src={menu} height="30px" alt="menu"></img>
            <ul>
                <li>
                    <a href="/">Accueil</a>
                </li>
                <li>
                    <a href="/projects">Projets</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}