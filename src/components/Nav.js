import "../styles/Nav.css";
import menu from "../img/menu.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
        <nav>
            <div id="menu-container">
            <img src={menu} height="30px" alt="menu"></img>
            <ul>
                <a href="/"><li><FontAwesomeIcon icon={faCaretRight}/>Accueil</li></a>
                <a href="/projects"><li><FontAwesomeIcon icon={faCaretRight}/>Projets</li></a>
                <a href="/contact"><li><FontAwesomeIcon icon={faCaretRight}/>Contact</li></a>
            </ul>
            </div>
        </nav>
    );
}