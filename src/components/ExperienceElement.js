import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function ExperienceElement({title, date, description, place, parity}) {
    return (
    <div className="outer">
        <div className={`timeline-card ${parity}`} >
            <div className="info">
                <h3 className="exp-title">{title}</h3>
                <div className="infos">
                    <FontAwesomeIcon icon={faCalendar} />
                    <p>{date}</p>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{place}</p>
                </div>
                
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
    )
}