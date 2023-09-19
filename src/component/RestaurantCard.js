import { IMG_CDN_URL } from "../config";

 const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    return (

        <div className="Card ">
            <img className="IMAGE"src={IMG_CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <p1 className="avgRating"><span><img className="Rating" src={"https://logodix.com/logo/710633.png"} alt="star" /></span>{avgRating}</p1>        
            <p className="cuisines">{cuisines.join(", ")}</p>
        </div>
    );
};

export default RestroCard ;