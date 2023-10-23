import './Footer.css';
import Logo from '../assets/logo.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-logo">
                <img src={Logo} alt='FashionStore Logo'/>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className="footer-attribute">
                <p>Image by <a 
                    href="https://www.freepik.com/free-photo/front-view-smiley-woman-pointing-herself_13757382.htm#query=woman%20shirt&position=22&from_view=search&track=ais">
                    Freepik</a></p>
                <p><a 
                href="https://www.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_17165425.htm#query=smiling%20man%20shirt%20fullbody&position=1&from_view=search&track=ais">
                    Image by rawpixel.com</a> on Freepik</p>
            </ul>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;