import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';
import DescriptionBox from '../Components/descriptionBox/DescriptionBox';
import RelatedProducts from '../Components/relatedProducts/RelatedProducts';

const Product = () => {
    const { all_products } = useContext(StoreContext);
    const { productId } = useParams();
    const product = all_products.find((e)=> e.id === Number(productId));
    return ( <div>
        <Breadcrumb product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div> );
}
 
export default Product;