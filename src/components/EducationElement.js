export default function EducationElement({title, description, startDate, endDate}) {
    return (
        <li>
        <span></span>
        <div>
            <div className="title">{title}</div>
            <div className="info">{description}</div>
        </div>
        <span className="number">
            <span>{startDate}</span>
            <span>{endDate}</span>
        </span>
        </li>
    )
    }
