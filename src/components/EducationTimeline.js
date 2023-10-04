import "../styles/Education.css"

export default function EducationTimeline(props) {
    return (
        <div class="educ-timeline">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}