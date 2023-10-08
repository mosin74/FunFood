import OnBording from "./PartnerOnBording";
import { Link } from "react-router-dom";

const HelpPartner = () => {
    return (
        <>
            <div className="Help">
                <div className="UpperBody">
                    <h1 className="UpperBody-p-h1">Help & Support</h1>
                    <p className="UpperBody-p-h1">Let's take a step ahead and help you better.</p>
                </div>
                <div className="Help-Sub">
                    <div className="Help-Left-Div">
                        <div className="Help-Left-Div-h1">

                            <Link to="/Help"><h1 className="Help-Left-Div-h1-h1 ">Partner Onboarding</h1></Link>
                            <Link to="/Help/legal"><h1 className="Help-Left-Div-h1-h1">Legal</h1></Link>
                            <Link to="/Help/FAQS"> <h1 className="Help-Left-Div-h1-h1">FAQs</h1></Link>
                        </div>

                    </div>
                    <div className="Help-Right-Div">
                        <OnBording />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpPartner;