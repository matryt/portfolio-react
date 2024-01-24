function Date({date, planned}) {
    if (planned) {
        return <span className="planned">{date}</span>;
    }
    return <span>{date}</span>;
}

export default function EducationElement({title, description, startDate, endDate, planned}) {
    return (
        <li>
        <span></span>
        <div>
            <div className="title">{title}</div>
            <div className="info">{description}</div>
        </div>
        <span className="number">
            <Date planned={planned} date={startDate} />
            <Date planned={planned} date={endDate} />
        </span>
        </li>
    )
    }

EducationElement.defaultProps = {
    planned: false
}
