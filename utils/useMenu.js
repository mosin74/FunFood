import { useState , useEffect } from "react"
import { Menu_URL } from "../src/config"



const useMenu = (id) =>{
  const [Menu ,setMenu] = useState({});
  
  useEffect(() => {
    getRestaurantMenu();
}, []);

async function getRestaurantMenu()
 {
    const data = await fetch(Menu_URL+id);
    const json = await data.json();
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info);
    console.log(json.data);
}

return Menu;

};
export default useMenu;