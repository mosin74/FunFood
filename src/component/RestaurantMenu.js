
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
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7199008&lng=75.857383&restaurantId="+id);
        const json = await data.json();
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info);
        console.log(json.data);
    }


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