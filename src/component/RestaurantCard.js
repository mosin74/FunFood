import { IMG_CDN_URL } from "../config";

 const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (

        <div className="Card">
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h5>{avgRating}star</h5>        
        </div>
    );
};

export default RestroCard ;