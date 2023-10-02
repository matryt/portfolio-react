import Header from "./components/Header";
import Nav from "./components/Nav";
import Card from "./components/Card";
import './App.css';
import me from './img/me.jpg';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header subtitle={"Accueil"}/>
      <Card title="Présentation" img={me} alt="My Photo">
        <p>Je m'appelle Mathieu CUVELIER, et je suis étudiant en deuxième année de prépa intégrée à Polytech Nice-Sophia.</p>
        <p>Je suis passionné d'informatique, et plus particulièrement de développement (notamment Python et Java).</p>
      </Card>
      <Card title="&Eacute;ducation">

      </Card>
    </div>
  );
}

export default App;
