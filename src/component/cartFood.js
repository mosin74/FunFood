import { IMG_CDN_URL } from "../config";
const CartFood = ({ name, price, description, imageId, }) => {


    return (
        <>
      
                <div className="Menu-Recommendation cart-food">
                    <img src={IMG_CDN_URL+imageId} className="cart-food-img"/>
                    <p>{name}</p>
                    <p><span>-</span><span>1</span><span>+</span></p>
                    <p>₹ {price / 100}</p>
                </div >
             
        </>
    )

}

export default CartFood;