import Hero from '../Components/hero/Hero';
import Popular from '../Components/popular/Popular';
import Offers from '../Components/offers/Offers';
import NewCollections from '../Components/newCollections/NewCollections';
import NewsLetter from '../Components/newsLetter/NewsLetter';

const Store = () => {
    return ( 
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div> 
    );
}
 
export default Store;