
import Mind from "./OnMind";
import { useState, useEffect } from "react";
import { Restaurants_URL } from "../config";
import { filterData } from "../../utils/Helper";
import Shimmer from "./Shimmer";


const Search = () => {


    const [searchText, setSearchText] = useState(); //To Create State Variable 
    const [MindSection, SetMindSection] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    const [Filteredrestaurants, setFilteredRestaurants] = useState(null);


    useEffect(() => {
        getSerchDish();
    }, []);


    async function getSerchDish() {
        const data = await fetch(Restaurants_URL);
        const json = await data.json();
        // setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetMindSection(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }



    return (
        <>
            {
                (!MindSection) ? (<Shimmer />) :
                    (<>
                        <div className="search-Container" data-testid="Search">
                            <input type="text"
                                className="SearchInput"
                                placeholder="Search for restaurant , cuisine or dish...."
                                value={searchText}
                            // onChange={(e) => {
                            //     setSearchText(e.target.value);
                            // }}
                            />

                            <p onClick={() => {
                                // const Data = filterData(searchText, restaurants);
                                // setFilteredRestaurants(Data);

                            }}>
                                🔍</p>
                        </div>
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

        </>
    )
}

export default Search;