import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEarthAmericas} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className='header-div'>
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",}} className='globe-img'/>
            <h3>MY TRAVEL JOURNAL</h3>
        </div>
    )
}