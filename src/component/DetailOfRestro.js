import { useEffect, useState } from "react";
import useRestrolist from "../../utils/useRestrolist";
import { Menu_URL } from "../config";
import { useParams } from "react-router-dom";

const RestroDetail = () => {
    const { id } = useParams();


    [information, setinformation] = useState({});
    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        const data = await fetch(Menu_URL + id);
        const json = await data.json();
        setinformation(json?.data?.cards[0]?.card?.card.info)
    }

    return (
        <>
        
            <div className="div">
                <div className="sub1">
                    <div className="detail">
                        <h2>{information?.name}</h2>
                        <p>{information?.cuisines}</p>
                        <p>{information?.areaName},{information?.city}</p>
                    </div>
                    <div className="rating">
                        <p1 className="avgRating"><span><img className="Rating" src={"https://logodix.com/logo/710633.png"} alt="star" /></span>{information?.avgRating}</p1>
                        <hr />
                        <p>{information?.totalRatingsString}</p>
                    </div>
                </div>
                <p></p>
            </div>


        </>
    )

}

export default RestroDetail;