import "../styles/Timeline.css"

export default function Timeline(props) {
    return (
        <div className="timeline" id={props.id}>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}