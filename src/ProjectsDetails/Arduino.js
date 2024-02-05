import ProjectDetails from "../components/ProjectDetails";

export default function Arduino() {
    return ProjectDetails(
        "Projet Arduino",
        "Python, C++, SQL",
        "Création d’un robot de surveillance : balayage d’une zone définie, détection des visages et " +
        "et reconnaissance faciale,  envoi des informations de visage à un ordinateur, affichage de toutes les informations dans un tableau de bord convivial",
        "https://github.com/matryt/ProjetArduino",
        [{
            id: 1,
            name: "Loïc Lamour",
            link: "https://github.com/LoicL832",
            username: "@LoicL832"
        }],
    )
}