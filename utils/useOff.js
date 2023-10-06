import { useState , useEffect} from "react"
import { Restaurants_URL } from "../src/config";

const useOff =()=>{




    [Off,setOff]=useState();

    useEffect(() => {
        getRestaurant();
    }, []);


   async function getRestaurant(){

    const data= await fetch(Restaurants_URL);
    const json = await data.json();
    setOff(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

  

    }

    return Off;
}


export default useOff;

