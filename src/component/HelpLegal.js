import Legal from "./Legal";
import OnBording from "./PartnerOnBording";
import { Link } from "react-router-dom";

const HelpLegal = () => {
    return (
        <>
            <div className="Help">
                <div className="UpperBody">
                    <h1>Help & Support</h1>
                    <p>Let's take a step ahead and help you better.</p>
                </div>
                <div className="Help-Sub">
                    <div className="Help-Left-Div">
                        <div className="Help-Left-Div-h1">

                            <Link to="/Help"><h1 className="Help-Left-Div-h1-h1">Partner Onboarding</h1></Link>
                            <Link to="/Help/legal"><h1 className="Help-Left-Div-h1-h1">Legal</h1></Link>
                            <Link to="/Help/FAQS"> <h1 className="Help-Left-Div-h1-h1">FAQs</h1></Link>
                        </div>

                    </div>
                    <div className="Help-Right-Div">
                        <Legal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpLegal;