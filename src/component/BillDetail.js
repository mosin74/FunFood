const BillDetail = () => {
    return (<>

        <div className="Main-Detail">

            <p>Bill Details</p>
            <div className="Detail-1">
                <p>Item Total</p>
                <p>₹290</p>
            </div>
            <div className="Detail-1">
                <p>Delivery Fee</p>
                <p>₹35</p>
            </div>
            <hr className="Detail-hr"/>
            <div className="Detail-1">
                <p>Subtotal</p>
                <p>₹3000</p>
            </div>
            <button className="Order-Button"> Place Order</button>
        </div>
    </>)

}

export default BillDetail;