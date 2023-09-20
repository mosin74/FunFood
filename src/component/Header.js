
import { ZomatoLogo, restaurantList } from "../config";
import { Link } from "react-router-dom";



export const HeaderComponent = () => {
    return (
        <>

            <div className="nav-bar">
                <img src={ZomatoLogo} alt="" className="logo" />

                <ul>
                    <li> <Link to="/Search">🔍Search</Link></li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/About">About us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <h1>{ }</h1>

        </>
    );
}
