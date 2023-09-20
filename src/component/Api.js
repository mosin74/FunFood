
// import Offer from "./Offer";
// import RestroCard from "./RestaurantCard";
// import { useEffect, useState } from 'react'
// import Shimmer from "./Shimmer";
// import { Link} from "react-router-dom";
// import { filterData } from "../../utils/Helper";
// import { Restaurants_URL } from "../config";
// import Mind from "./OnMind";


// function Api({Off,MindSection,restaurants,Filteredrestaurants}){
//     const [searchText, setSearchText] = useState(); //To Create State Variable 
//     const [Off, setOff] = useState(null);
//     const [MindSection,SetMindSection]=useState(null);
//     const [restaurants, setRestaurants] = useState(null);
//     const [Filteredrestaurants, setFilteredRestaurants] = useState(null);


//     // if (setFilteredRestaurants.length===0) {
//     //     return <h1>No Result Found</h1>

//     // }



//     useEffect(() => {
//         getRestaurant();
//     }, []);


//     async function getRestaurant() {
//         const data = await fetch(Restaurants_URL);
//         const json = await data.json();
//         // console.log(json);
//         setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setOff(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//         SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
//     }
// }


// export default Api;