import { IMG_CDN_URL } from "../config";
const CartFood = ({name,price,description,imageId}) => {

    return (
        <>
            <div className="Menu-Recommendation">

                <div className="Menu-Recommendation-Left">
                    {/* <p>{Menu.card?.}</p> */}
                    <h3>{name}</h3>
                    <p>₹ {price/100}</p>
                    <p1>{description}</p1>
                </div>
                <div className="Menu-Recommendation-Right">
                    <img src={IMG_CDN_URL + imageId} alt="" className="Menu-Recommendation-Img" />

                </div>

            </div >
            <hr className="Menu-hr" />
        </>
    )

}

export default CartFood;