
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Thanks = () => {
    return (

        <>
        

            <div className="Thanks">
                <h1 className="Done-icon"> <AiFillCheckCircle /></h1>
                <h className="Thanks-h">Thank You!</h>
                <p>Your Order is Succesfully Placed.Thanks!</p>
                <button className="Thanks-Button"><Link to="/">Go To Home</Link></button>
            </div>
        </>
    )
}
export default Thanks;