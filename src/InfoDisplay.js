import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

export default function InfoDisplay(props) {
    return (
        <div>
            <div className='cards'>
                <img src={props.coverImage} className='coverImage' alt='coverImg'/>
                <div className='right'>
                    <div className='cards-first'>
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#f55a5a",}} className='location-img' />
                        <h6 className='country'>{props.country}</h6>
                        <a href={props.link} className='link'>View on Google Maps</a>
                    </div>
                    <h3 className='placeName'>{props.placeName}</h3>
                    <h5 className='date'>{props.date}</h5>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
            {props.id !== 3 && <div className='horizontalRule'></div>}
        </div>
    )
}