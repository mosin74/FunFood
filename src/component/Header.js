
import { useState } from "react";
import { ZomatoLogo, restaurantList } from "../config";
import { Link } from "react-router-dom";
import DarkThem from "./DarkThem";

// const [Dark,SetDark]=useState()

export const HeaderComponent = () => {




    return (
        <>

            <div className="nav-bar">
                <Link to="/"><img src={ZomatoLogo} alt="" className="logo" data-testid="logo"/></Link>

                <ul>
                    <li> <Link to="/Search" className="Link">🔍Search</Link></li>
                    {/* <li> <Link to="/">Home</Link></li> */}
                    <li> <Link to="/Help" className="Link">Help</Link></li>
                    {/* <li> <Link to="/About">About us</Link></li> */}
                    {/* <li><Link to="/Contact">Contact</Link></li> */}
                    <li>Cart</li>
                </ul>
                <DarkThem/>
            </div>


        </>
    );
}
