
import { useState } from "react";
import { ZomatoLogo, restaurantList } from "../config";
import { Link } from "react-router-dom";

// const [Dark,SetDark]=useState()

export const HeaderComponent = () => {


const [Dark,SetDark]=useState(false)


    return (
        <>

            <div className="nav-bar">
                <Link to="/"><img  src={ZomatoLogo} alt="" className="logo" /></Link>

                <ul>
                    <li> <Link to="/Search">🔍Search</Link></li>
                    {/* <li> <Link to="/">Home</Link></li> */}
                    <li> <Link to="/Help">Help</Link></li>
                    {/* <li> <Link to="/About">About us</Link></li> */}
                    {/* <li><Link to="/Contact">Contact</Link></li> */}
                    <li>Cart</li>
                </ul>
                {Dark ? <img  onClick ={ ()=>{SetDark(false)}} src="" alt="Dark" className="logo" />: <img  onClick ={ ()=>{SetDark(true)}}src="" alt="Light" className="logo" />}
            </div>

        </>
    );
}
