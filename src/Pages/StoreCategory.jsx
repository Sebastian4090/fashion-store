import {useContext} from 'react';
import './CSS/StoreCategory.css';
import { StoreContext } from '../Context/StoreContext';
import dropdownIcon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/item/Item';

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
                <div className="store-category-indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 33 products  {/* sort using reduce method?*/}
                    </p>
                    <div className="store-category-sort">
                        Sort by <img src={dropdownIcon} alt="dropdown" />
                    </div>
                </div>
                <div className="store-category-products">
                    {all_products.map((item, i)=>{
                        if (props.category === item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
                        } else {
                            return null;
                        }
                    })}
                </div>
        </div>
    );
}
 
export default StoreCategory;


