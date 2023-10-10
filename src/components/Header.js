import "../styles/Header.css";

export default function Header({subtitle}) {
    return (
        <header>
            <h1>Mon Portfolio</h1>
            <h2>{subtitle}</h2>
        </header>
    );
}