import './Hero.css';
import banner from '../assets/banner2.png';

const Hero = () => {
    return ( 
        <div className="hero">
            <div className="hero-left">
                <h2>EXPLORE OUR COLLECTION</h2>
                <div>
                    <p>Embark</p>
                    <p>on journey through our</p>
                    <p id='highlight'>collections</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={banner} alt='banner'/>
            </div>
        </div>
     );
}
 
export default Hero;