
import Offer from "./Offer";
import RestroCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/Helper";
import { Restaurants_URL } from "../config";
import Mind from "./OnMind";
import Api from "./Api";

const Body = () => {




    // function filterData(searchText, restaurants) {
    //     const Data = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    //     return Data;
    // }





    // Search Text is local state varaible
    const [searchText, setSearchText] = useState(); //To Create State Variable 
    const [Off, setOff] = useState(null);
    const [MindSection,SetMindSection]=useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [Filteredrestaurants, setFilteredRestaurants] = useState(null);


    // // if (setFilteredRestaurants.length===0) {
    // //     return <h1>No Result Found</h1>

    // // }



    useEffect(() => {
        getRestaurant();
    }, []);


    async function getRestaurant() {
        const data = await fetch(Restaurants_URL);
        const json = await data.json();
        // console.log(json);
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOff(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }



    // useEffect(() => {
    //     getRestaurant();
    // }, []);


    return (<>
        {
            (!Filteredrestaurants) ? (<Shimmer />) :
                (
                    <>
                        {/* <div className="search-Container">
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
                        </div> */}

                        <h2 className="Heading">Best offers for you</h2>

                        <div className="Offer">
                            {Off.map((Special) => {
                                return (
                                    <Offer {...Special} />
                                )
                            })
                            }
                        </div>
                        <h2 className="Heading">What's on your mind?</h2>

                        <div className="OnMind">
                            {MindSection.map((OnMind) => {
                                return (
                                    <Mind{...OnMind} />
                                )
                            })}
                        </div>
                        <h2 className="Heading">Restaurants with online food delivery in Indore</h2>
                        <div className='restaro-list' >
                            {Filteredrestaurants.map((restaurants) => {
                                return (
                                    <Link to={"/restaurant/" + restaurants.info.feeDetails.restaurantId}>
                                        <RestroCard {...restaurants.info} />
                                    </Link>
                                )
                            })
                            }

                        </div>
                    </>
                )
        }
    </>)


};


export default Body;