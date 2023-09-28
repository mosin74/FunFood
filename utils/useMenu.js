import { useState, useEffect } from "react"
import { Menu_API, Menu_URL, Restaurants_URL } from "../src/config"



const useMenu = (id) => {
  const [menuList, setMenulist] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(Menu_API+id);
    const json = await data.json();
    // setMenu(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setMenulist(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

  }
  console.log(menuList);

  return menuList;

};
export default useMenu;