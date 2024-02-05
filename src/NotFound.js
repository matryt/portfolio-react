import Nav from "./components/Nav";
import Header from "./components/Header";

export default function NotFound() {
    return (
        <div className="App" >
            <Nav />
            <Header subtitle={"404 - Page introuvable !"}/>
            <div className="body">
                Malheureusement, la page que vous avez demandée est inconnue. Vous pouvez néanmoins cliquer sur les liens en haut de la page pour retourner vers une autre page.
            </div>
        </div>
    );
}