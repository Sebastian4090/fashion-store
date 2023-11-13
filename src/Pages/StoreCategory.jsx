import {useContext, useEffect, useState} from 'react';
import './CSS/StoreCategory.css';
import { StoreContext } from '../Context/StoreContext';
import dropdownIcon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../Redux/Actions/ProductActions';

const StoreCategory = (props) => {
    const {all_products} = useContext(StoreContext);
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList;

    useEffect(() => {
        const fetchProducts = async() => {
            dispatch(listProduct())
        }
    }, [dispatch])

    return (
        <div className="store-category">
            <div className="store-category-banner">
                <div className="store-category-left">
                    <h2>EXPLORE OUR COLLECTION {props.name}</h2>
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
                        <span>Showing 1-12</span> out of {all_products.reduce((acc, _) => acc + 1, 0)} products
                    </p>
                    <div className="store-category-sort">
                        Sort by <img src={dropdownIcon} alt="dropdown" />
                    </div>
                </div>
                <div className="store-category-products">
                    {
                        loading ? (<p>Loading,,,</p>) : error ? (<p>Error: {error}</p>) 
                        : (
                            <>
                                {all_products.map((item, i)=>{
                                if (props.category === item.category){
                                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
                                } else {
                                    return null;
                                }
                                })}       
                            </>
                        )
                    }
                </div>
                <div className="store-category-loadMore">
                    Explore more
                </div>
        </div>
    );
}
 
export default StoreCategory;


