import { Offer_IMG_CDN_URL } from "../config"

const Offer = ({imageId})=>{
    return(
        <>
        <div>
            <img className="IMG-offer" src={Offer_IMG_CDN_URL+imageId} alt="" />
        </div>
        </>
    )

}

export default Offer;