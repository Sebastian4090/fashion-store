import {useContext} from 'react';
import './CSS/StoreCategory.css';
import { StoreContext } from '../Context/StoreContext';

const StoreCategory = (props) => {
    const {all_products} = useContext(StoreContext);

    return (
        <div className="store-category">
            <div className="store-category-banner">
                <div className="store-category-left">
                    <h2>EXPLORE OUR COLLECTION</h2>
                    <div>
                        <p>{props.text}</p>
                    </div>
                </div>
            <div className="store-category-right">
                <img src={props.banner} alt='banner'/>
            </div>
        </div>
        </div>
    );
}
 
export default StoreCategory;