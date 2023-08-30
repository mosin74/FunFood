
import RestroCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {




    function filterData(searchText, restaurants) {
        const Data = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
        return Data;
    }




    // Search Text is local state varaible
    const [searchText, setSearchText] = useState(); //To Create State Variable 
    const [restaurants, setRestaurants] = useState(null);
    const [Filteredrestaurants, setFilteredRestaurants] = useState(null);



    // if (setFilteredRestaurants.length===0) {
    //     return <h1>No Result Found</h1>

    // }





    // API call not worked
    useEffect(() => {
        getRestaurant();
    }, []);



    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }








    return (<>
        {
            (!Filteredrestaurants) ? (<Shimmer />) :
                (
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
                                   
                                        <RestroCard{...restaurants.info} key={restaurants.info.id} />
                                    
                                );
                            })
                            }
                        </div>
                    </>

                )
        }
    </>)


};


export default Body;