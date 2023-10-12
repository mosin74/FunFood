import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../utils/CartSlice";
const BillDetail = () => {

    const cartItems = useSelector(store => store.cart.items);


    const dispatch = useDispatch();

    const ClearCart = (Items) => {
        dispatch(clearCart(Items))
    }
    function Subtotal() {
        let a = 0;
        for (let index = 0; index < cartItems.length; index++) {
            a = ((cartItems[index].price) / 100) + a;
        }
        return a;
    }
    return (
        (cartItems != 0) ?
            <>
                <div className="Main-Detail">
                    <p>Bill Details</p>
                    <div className="Detail-1">
                        <p>Item Total</p>
                        <p>₹{Subtotal()}</p>
                    </div>
                    <div className="Detail-1">
                        <p>Delivery Fee</p>
                        <p>₹35</p>
                    </div>
                    <hr className="Detail-hr" />
                    <div className="Detail-1">
                        <p>Subtotal</p>
                        <p>₹{Subtotal() + 35}</p>

                    </div>
                    <button className="Order-Button"><Link to="/thanks"  onClick={()=>{ClearCart(cartItems)} }>Place Order</Link></button>
                </div>
            </>
            : (<><h1>Cart Is Empty</h1></>)
    )

}

export default BillDetail;