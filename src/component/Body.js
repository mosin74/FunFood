import { restaurantList } from "../config";
import RestroCard from "./RestaurantCard";
import {useState} from 'react'


export const Body = () => {


    function filterData(searchText, restaurants) {
        const Data = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
        return Data;
    }
    // Search Text is local state varaible
    const [searchText, setSearchText] = useState(); //To Create State Variable 
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
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
                    setRestaurants(Data);

                }}>
                    Search</button>
            </div>


            <div className='restaro-list' >

                {restaurants.map((restaurant) => {
                    return (
                        <RestroCard{...restaurant.data} />
                    );
                })
                }
            </div>
        </>
    );
};