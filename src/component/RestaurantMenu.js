
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useMenu from "../../utils/useMenu";


const RestaurantMenu = () => {
    const { id } = useParams();
    const Menu = useMenu(id);
    return (
        <>
            <div>
                <h1>id:{id}</h1>
                <h2>{Menu.name}</h2>
                <img src={IMG_CDN_URL+Menu.imageId} alt=""/>
                {/* <img src=""/> */}
            </div>
        </>
    )
}

export default RestaurantMenu;