import { useSelector } from "react-redux";

const useSubtotal = () => {

    const cartItems = useSelector(store => store.cart.items);
    let a = 0;
    function Subtotal() {
        for (let index = 0; index < cartItems.length; index++) {
            a = ((cartItems[index].price) / 100) + a;
        }
        return a;
    }
    return Subtotal;
}

export default useSubtotal;