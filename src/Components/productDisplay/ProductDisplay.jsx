import './ProductDisplay.css';
import star_fullIcon from '../assets/star-full-icon.svg';
import star_emptyIcon from '../assets/star-empty-icon.svg';
import star_halfIcon from '../assets/star-half-icon.svg';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(StoreContext);
    const sProduct = products.find((p) => p.id === match.params.id);

    return ( 
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-imgList">
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                    <img src={product.image} alt="product_image" />
                </div>
                <div className="product-display-img">
                    <img className="product-display-imgMain" src={product.image} alt="product_image" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-rightStars">              {/* Need to Add some way to calculate star rating */}
                    <img src={star_fullIcon} alt="star" />
                    <img src={star_fullIcon} alt="star" />
                    <img src={star_fullIcon} alt="star" />
                    <img src={star_fullIcon} alt="star" />
                    <img src={star_emptyIcon} alt="star" />
                    <p>(122)</p>
                </div>
                <div className="product-display-rightPrices">
                    <div className="product-display-rightPriceOld">{product.old_price !== product.new_price ? '$' + product.old_price : ''}</div>
                    <div className="product-display-rightPriceNew">${product.new_price}</div>
                    <div className="product-display-rightDiscount">{product.old_price !== product.new_price ? Math.round(((product.new_price/product.old_price)*100) - 100) + '%' : ''}</div>
                </div>
                <div className="product-display-rightDescription">
                    <p>Sample description</p>
                </div>
                <div className="product-display-rightSize">
                   <h1>Select size</h1>
                   <div className="product-display-rightSizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                   </div> 
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='product-display-rightCategory'><span>Category :</span> {product.category}</p>
            </div>
        </div>
     );
}
 
export default ProductDisplay;