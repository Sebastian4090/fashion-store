import './Item.css';

const Item = (props) => {
    return ( 
    <div className="item">
        <img src={props.image} alt='item'/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price !== props.new_price ? '$' + props.old_price : ''}
            </div>
            <div className="item-discount">
                {props.old_price !== props.new_price ? Math.round(((props.new_price/props.old_price)*100) - 100) + '%' : ''}
            </div>
        </div>
    </div> 
    );
}
 
export default Item;