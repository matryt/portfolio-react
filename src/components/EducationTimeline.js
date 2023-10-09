import "../styles/Education.css"

export default function EducationTimeline(props) {
    return (
        <div className="educ-timeline">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}