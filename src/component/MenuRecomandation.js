
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useMenu from "../../utils/useMenu";


const MenuRecomandation = () => {
    const { id } = useParams();
    const menuList = useMenu(id);
    console.log(menuList)


    return (<>
        <h1>Recommandation</h1>
        {
            menuList.map((Menu) => {
                return (
                    <>
                        <div className="Recommendation">
                            {/* <p>{Menu.card?.}</p> */}
                            <h2>{Menu.card?.info.name}</h2>
                            <p>₹ {Menu.card?.info.price}</p>
                        </div>
                        <div className="MenuIMG">
                            <img src={IMG_CDN_URL + Menu.card?.info.imageId} alt="" />
                        </div>
                    </>
                )
            })
        }
    </>);
}

export default MenuRecomandation;