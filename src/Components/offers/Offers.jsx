import './Offers.css'
import exclusive_img from '../assets/exclusive_img.png'

const Offers = () => {
    return ( 
        <div className="offers">
            <div className="offers-left">
                <h1>Discover Exclusive Offers</h1>
                <p>AVAILABLE JUST FOR YOU</p>
                <button>Check Them Out</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_img} alt='exclusives'/>
            </div>
        </div>
     );
}
 
export default Offers;