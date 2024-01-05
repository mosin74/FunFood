
import Offer from "./Offer";
import RestroCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Mind from "./OnMind";
import useRestrolist from "../../utils/useRestrolist";
import useMind from "../../utils/useMind";
import useOff from "../../utils/useOff";
import OffShimmer from "./ShimmerOff";
import MindShimmer from "./ShimmerMInd";

const Body = () => {


    const OffSection = useOff();
    const Restro = useRestrolist();
    const MindSection = useMind();
    return (<>
        {
            (!OffSection) ? (<OffShimmer />) :
                (
                    <>
                        <h2 className="Heading">Best offers for you</h2>

                        <div className="Offer">
                            {OffSection.map((Special) => {
                                return (
                                    <Offer {...Special} />
                                )
                            })
                            }
                        </div>
                    </>
                )}


        {(!MindSection) ? (<MindShimmer />) : (<>

            <h2 className="Heading">What's on your mind?</h2>
            <div className="OnMind">
                {MindSection.map((OnMind) => {
                    return (
                        <Mind{...OnMind} />
                    )
                })}
            </div>
        </>)
        }
        {(!Restro) ? (<Shimmer />) : (
            <>
                <h2 className="Heading">Restaurants with online food delivery in Indore</h2>
                <div className='restaro-list' >
                    {Restro.map((restaurants) => {
                        return (
                            <Link to={"/restaurant/" + restaurants.info.id}>

                                <RestroCard {...restaurants.info} />
                            </Link>
                        )
                    })
                    }

                </div>
            </>)
        }
    </>
    )
}
//     </>)


// };


export default Body;