import { restaurantList } from "../config";
import RestroCard from "./RestaurantCard";
import {useEffect, useState} from 'react'
import Shimmer from "./Shimmer";
export const Body = () => {




    function filterData(searchText, restaurants) {
        const Data = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
        return Data;
    }




    // Search Text is local state varaible
    const [searchText, setSearchText] = useState(); //To Create State Variable 
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [Filteredrestaurants, setFilteredRestaurants] = useState(restaurantList);

if (setFilteredRestaurants.length===0) {
    return <h1>No Result Found</h1>
    
}





// API call not worked
    useEffect(()=>{
        getRestaurant();
    },[]);



    async function getRestaurant()
    {
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =  await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log("render");
    }







    
    return ( <>
        {
        restaurants?.length===0 ? (< Shimmer />):(
            <>
            <div className="search-Container">
                <input type="text"
                    className="SearchInput"
                    placeholder="Search for restaurant , cuisine or dish"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);

                    }} 
                />

                <button onClick={() => {
                    const Data = filterData(searchText, restaurants);
                    setFilteredRestaurants(Data);

                }}>
                    Search</button>
            </div>


            <div className='restaro-list' >

                {Filteredrestaurants.map((restaurants) => {
                    return (
                        <RestroCard{...restaurants.info} />
                    );
                })
                }
            </div>
        </>
        )
    }
    </>
    );
};