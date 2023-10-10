import { useSelector } from "react-redux";
const BillDetail = (props) => {

    const cartItems = useSelector(store => store.cart.items);
 
    function Subtotal() {
        let a = 0;
        for (let index = 0; index < cartItems.length; index++) {
            a = ((cartItems[index].price) / 100) + a;
        }
        return a;
    }
    return (<>
        <div className="Main-Detail">
            <p>Bill Details</p>
            <div className="Detail-1">
                <p>Item Total</p>
                <p>{Subtotal()}</p>
            </div>
            <div className="Detail-1">
                <p>Delivery Fee</p>
                <p>₹35</p>
            </div>
            <hr className="Detail-hr" />
            <div className="Detail-1">
                <p>Subtotal</p>
                <p>{Subtotal()+35}</p>

            </div>
            <button className="Order-Button"> Place Order</button>
        </div>
    </>)

}

export default BillDetail;