import '../styles/Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            {props.img && <div className="img-container">
                <img src={props.img} alt={props.alt} />
            </div>}
            <div className="card-content">{props.children}</div>
        </div>
    )
}