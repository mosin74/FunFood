import { IMG_CDN_URL } from "../config";

 const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (

        <div className="Card ">
            <img className="IMAGE"src={IMG_CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p1>{avgRating}star</p1>        
        </div>
    );
};

export default RestroCard ;