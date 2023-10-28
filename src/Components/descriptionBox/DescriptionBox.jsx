import './DescriptionBox.css';

const DescriptionBox = () => {
    return ( <div className="descriptionBox">
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-navBox">Description</div>
            <div className="descriptionBox-navBox fade">Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem necessitatibus voluptate autem molestias nulla sequi accusamus! 
            Reiciendis, deserunt ducimus similique, 
            magnam consequuntur neque assumenda mollitia saepe provident velit officia tenetur.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem necessitatibus voluptate autem molestias nulla sequi accusamus! 
            Reiciendis, deserunt ducimus similique, 
            magnam consequuntur neque assumenda mollitia saepe provident velit officia tenetur.</p>
        </div>
    </div> );
}
 
export default DescriptionBox;