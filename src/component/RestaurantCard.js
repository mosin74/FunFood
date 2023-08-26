import { IMG_CDN_URL } from "../config";

 const RestroCard = ({ cloudinaryImageId, name, cuisines, rating }) => {
    return (

        <div className="Card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{rating}star</h5>
        </div>
    );
};

export default RestroCard ;