import Header from "./components/Header";
import Nav from "./components/Nav";
import Card from "./components/Card";
import './App.css';
import me from './img/me.jpg';
import ETimeline from './components/EducationTimeline';
import EItem from './components/EducationElement';
import ExpTimeline from './components/ExperienceTimeline';
import ExpItem from './components/ExperienceElement';


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
        <ETimeline>
          <EItem title="Lycée Auguste Renoir" description="Baccalauréat général, mention très bien (Spécialités Mathématiques, NSI et Physique)" startDate="2019" endDate="2022"></EItem>
          <EItem title="Polytech Nice-Sophia" description="Prépa intégrée" startDate="2022" endDate="2024"></EItem>
          <EItem title="Polytech Nice-Sophia" description="Cycle ingénieur Systèmes d'Information" startDate="2024 (prévu)" endDate="2027 (prévu)"></EItem>
        </ETimeline>
      </Card>
      <Card title="Expériences professionnelles">
        <ExpTimeline>
          <ExpItem title="Stage de découverte de troisième" date="Février 2019" description="Séquence d'observation en milieu professionnel de troisième dans le service Systèmes d'Information de la Ville de Saint-Laurent-du-Var : découverte du projet fibre mené par le service, du fonctionnement du système informatique scolaire et communal..." place="Mairie de Saint Laurent du Var" parity="odd"/>
          <ExpItem title="Stage ouvrier " date="Juillet 2023" description="A ajouter..." place="RISF, Nice" parity="even"/>
        </ExpTimeline>
      </Card>
    </div>
  );
}

export default App;
