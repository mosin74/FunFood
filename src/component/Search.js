
import Mind from "./OnMind";
import { useState, useEffect } from "react";
import { Restaurants_URL } from "../config";
import { filterData } from "../../utils/Helper";
import Shimmer from "./Shimmer";

import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import MindShimmer from "./ShimmerMInd";

const Search = () => {


    const [searchText, setSearchText] = useState(""); //To Create State Variable 
    const [MindSection, SetMindSection] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [Filteredrestaurants, setFilteredRestaurants] = useState("");


    useEffect(() => {
        getSerchDish();
    }, []);


    async function getSerchDish() {
        const data = await fetch(Restaurants_URL);
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }

    // console.log(restaurants);
    // console.log(Filteredrestaurants);



    return (
        <>
            {
                (!MindSection) ? (< MindShimmer />) :
                    (<>
                        <div className="search-Container" data-testid="Search">
                            <input type="text"
                                className="SearchInput"
                                placeholder="Search for restaurant , cuisine or dish...."
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}

                            />

                            {/* <p onClick={() => {
                                const Data = filterData(searchText, restaurants);
                                setFilteredRestaurants(Data);
                            }}>
                                🔍</p> */}
                            <img src="https://tse4.mm.bing.net/th?id=OIP.9-l9QQfhMfbvYNTRGgp30gHaHa&pid=Api&P=0&h=180" alt="Search" className="Search-Img" onClick={() => {
                                const Data = filterData(searchText, restaurants);
                                setFilteredRestaurants(Data);
                            }} />
                        </div>
                        {(searchText == null) ? (null) : (

                            <>
                                {Filteredrestaurants.map((List) => {
                                    return (
                                        <Link to={"/restaurant/" + List.info.feeDetails.restaurantId}>
                                            <div className="Search-restro">
                                                <p>{List.info.name}</p>
                                                <img className="Search-restro-Img" src={IMG_CDN_URL + List.info.cloudinaryImageId} />
                                            </div>
                                        </Link>
                                    )


                                })}

                            </>
                        )}
                        <h2 className="Heading">Popular Cuisines</h2>
                        <div className="OnMind Search-OnMind" data-testid="OnMind">
                            {MindSection.map((OnMind) => {
                                return (
                                    <Mind{...OnMind} />
                                )
                            })}

                        </div>

                    </>)
            }
            <p className="CopyRight Copy">
                &copy; 2023 Mosin Shaikh | All Rights Reserved
            </p>
        </>
    )
}

export default Search;