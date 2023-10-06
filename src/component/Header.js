
import { useState } from "react";
import { ZomatoLogo, restaurantList } from "../config";
import { Link } from "react-router-dom";
import DarkThem from "./DarkThem";
import { useSelector } from "react-redux";
import store from "./Store";
import Logo  from "../Images/Logo.png"
// const [Dark,SetDark]=useState()

export const HeaderComponent = () => {


 
const cartItems=useSelector(store=>store.cart.items);

    return (
        <>

            <div className="nav-bar">
                <Link to="/"><img src={Logo} alt="" className="logo" data-testid="logo"/></Link>

                <ul>
                    <li> <Link to="/Search" className="Link"><img src="https://tse4.mm.bing.net/th?id=OIP.9-l9QQfhMfbvYNTRGgp30gHaHa&pid=Api&P=0&h=180" alt="Search" className="Menu-Start-Img" /><span className="navbar-li-span">Search</span></Link></li>
                    {/* <li> <Link to="/">Home</Link></li> */}
                    <li> <Link to="/Help" className="Link"><img src="https://cdn4.iconfinder.com/data/icons/vectory-symbols/40/help_2-512.png" alt="Search" className="Menu-Start-Img" /><span className="navbar-li-span">Help</span></Link></li>
                    {/* <li> <Link to="/About">About us</Link></li> */}
                    {/* <li><Link to="/Contact">Contact</Link></li> */}
                    <li><Link to="/Cart" className="Link"><span className="cart-li-span">{cartItems.length}</span>Cart</Link></li>
                </ul>
                <DarkThem/>
            </div>


        </>
    );
}
