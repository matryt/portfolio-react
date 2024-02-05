import ProjectDetails from "../components/ProjectDetails";

export default function Rogue() {
    return ProjectDetails(
        "Jeu rogue-like",
        "Python",
        "Jeu rogue-like avec une interface graphique sous Tkinter, création de différents niveaux et implémentation de différentes actions (attaque, achat de fournitures diverses…)",
        "https://github.com/matryt/Projet-Rogue",
        [
            {
                id: 1,
                name: "Loïc Lamour",
                link: "https://github.com/LoicL832",
                username: "@LoicL832"
            },
            {
                id: 2,
                name: "Léonard Lucenay",
                link: "https://github.com/leolhuile",
                username: "@leolhuile"
            },
        ],
    )
}