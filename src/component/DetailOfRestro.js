import { useEffect, useState } from "react";
import useRestrolist from "../../utils/useRestrolist";
import { Menu_URL } from "../config";
import { Link, useParams } from "react-router-dom";

const RestroDetail = () => {
    const { id } = useParams();


    [information, setinformation] = useState({});

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo() {
        const data = await fetch(Menu_URL + id);
        const json = await data.json();
        setinformation(json?.data?.cards[0]?.card?.card?.info);


    }

    return (
        <>

        <div className="Menu-Start ">
                <p className="detail-h2-p"><Link to="/"><span>Home   </span></Link>{"     /    "}{information?.name}</p>
                <Link to="/Search"> <img src="https://tse4.mm.bing.net/th?id=OIP.9-l9QQfhMfbvYNTRGgp30gHaHa&pid=Api&P=0&h=180" alt="Search" className="Menu-Start-Img" /></Link>
        </div>
            <div className="Menu-Detail">
                <div className="Menu-Left">
                    <div className="detail">
                        <h2 className="detail-h2-p">{information?.name}</h2>
                        <p className="detail-h2-p">{information?.cuisines}</p>
                        <p className="detail-h2-p">{information?.areaName} , {information?.city}</p>
       
                
                    </div>
                </div>
                <div className="Menu-right ">
                    <p className="avgRating detail-h2-p"><span><img className="Rating detail-h2-p" src={"https://logodix.com/logo/710633.png"} alt="star" /></span>{information?.avgRating}</p>
                    <hr />
                    <p className="detail-h2-p">{information?.totalRatingsString}</p>
                </div>
            </div>
            <hr className="Menu-hr"/>


        </>
    )

}

export default RestroDetail;