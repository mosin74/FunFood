
import { useEffect, useState } from 'react'
import { Restaurants_URL } from '../src/config';


const useMind = () => {

    const [MindSection, SetMindSection] = useState(null);

    useEffect(() => {
        getRestaurant();
    }, []);


    async function getRestaurant() {
        const data = await fetch(Restaurants_URL);
        const json = await data.json();
        SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }

    return MindSection;


}

export default useMind;