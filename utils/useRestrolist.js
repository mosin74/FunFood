
import { useEffect, useState } from 'react';
import { Restaurants_URL } from '../src/config';


const useRestrolist = () => {





    const [Off, setOff] = useState(null);
    const [MindSection,SetMindSection]=useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [Filteredrestaurants, setFilteredRestaurants] = useState(null);






    useEffect(() => {
        getRestaurant();
    }, []);


    async function getRestaurant() {
        const data = await fetch(Restaurants_URL);
        const json = await data.json();
        // console.log(json);
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setOff(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)

    }
    return restaurants;
}

export default useRestrolist