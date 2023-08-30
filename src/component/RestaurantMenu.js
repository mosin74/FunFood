
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";


const RestaurantMenu = () => {
    const { id } = useParams();
    const [Menu, setMenu] = useState({});


    useEffect(() => {
        getRestaurantMenu();
    }, []);

    async function getRestaurantMenu() {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7199008&lng=75.857383&restaurantId=292119&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info);
    }


    return (
        <>
            <div>
                <h1>id:{id}</h1>
                <h2>{Menu.name}</h2>
                <img src={IMG_CDN_URL + Menu.imageId} alt=""/>
                {/* <img src=""/> */}
            </div>
        </>
    )
}

export default RestaurantMenu;