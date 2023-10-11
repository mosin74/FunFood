
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useMenu from "../../utils/useMenu";
import Shimmer from "./Shimmer";
import { addItem } from "../../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuRecomandation = () => {


    [Gotocart, setGotocart] = useState(false);

    const { id } = useParams();
    const menuList = useMenu(id);
    console.log(menuList);
    const dispatch = useDispatch();

    const AddFoodItem = (Info) => {
        dispatch(addItem(Info));

    }


    return (

        (!menuList) ? (<Shimmer />) : (
            <>
                <h2>Recommandation</h2>
                {
                    menuList.map((Menu) => {
                        return (

                            <>
                                <div className="Menu-Recommendation">

                                    <div className="Menu-Recommendation-Left">
                                        {/* <p>{Menu.card?.}</p> */}
                                        <h3>{Menu.card?.info.name}</h3>
                                        <p className="detail-h2-p">₹ {(Menu.card?.info.price) / 100}</p>
                                        <p1>{Menu.card?.info.description}</p1>
                                    </div>
                                    <div className="Menu-Recommendation-Right">
                                        <img src={IMG_CDN_URL + Menu.card?.info.imageId} alt="" className="Menu-Recommendation-Img" />

                                        {/* {
                                            (!Gotocart) ? <button className=" Menu-Recommendation-Right-Button" onClick={() => {
                                                AddFoodItem((Menu.card.info));
                                                setGotocart(true);
                                            }}> Add </button> : (<button className=" Menu-Recommendation-Right-Button"><Link to="/Cart"> Cart</Link> </button>)
                                        } */}
                                        <button className=" Menu-Recommendation-Right-Button" onClick={() => {
                                            AddFoodItem((Menu.card.info))
                                        }}> Add </button>




                                    </div>

                                </div >
                                <hr className="Menu-hr" />
                            </>
                        )

                    })
                }
            </>));
}

export default MenuRecomandation;