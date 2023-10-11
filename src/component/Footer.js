
import twitter from "../Images/twitter.png"
import instagram from "../Images/Instagram_icon.png"
import linkdin from "../Images/Linkdin.png"
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export const FooterComponent = () => {
    return (
        <>
            <div className="footer">

                <div className="main-footer">


                    <div className="main-footer-1">
                        <Link to="/"><h className="Logo"><span className="Logo-span-1">Fun</span><span className="Logo-span-2">Food.</span></h></Link>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit deserunt eveniet! Deserunt, velit. Mollitia nostrum aut nihil ex eos optio recusandae id ad distinctio, nulla commodi, dolorum, tempore minus.</p>
                        <div className="Icons">
                            <h1 className="Icons-h1"> <AiFillLinkedin /></h1>
                            <h1 className="Icons-h1"><AiFillGithub /></h1>
                            <h1 className="Icons-h1"><AiFillTwitterCircle /></h1>
                            <h1 className="Icons-h1"><AiFillInstagram /></h1>
                        </div>



                    </div>

                    <div className="main-footer-2">
                        <ul className="main-footer-2-ul">
                            <h3 className="main-footer-2-ul-h3">Company</h3>
                            <li className="main-footer-2-ul-li">About</li>
                            <li className="main-footer-2-ul-li">Careers</li>
                            <li className="main-footer-2-ul-li">Team</li>
                            <li className="main-footer-2-ul-li">FunFood One</li>
                            <li className="main-footer-2-ul-li">FunFood Instamart</li>
                            <li className="main-footer-2-ul-li">FunFood Genie</li>




                        </ul>
                        <div className="About">
                            <ul className="main-footer-2-ul">
                                <h3 className="main-footer-2-ul-h3">Contact us</h3>
                                <li className="main-footer-2-ul-li"> Help & Support</li>
                                <li className="main-footer-2-ul-li"> Partner with us</li>
                                <li className="main-footer-2-ul-li"> Ride with us</li>
                            </ul>
                            <ul className="main-footer-2-ul">
                                <h3 className="main-footer-2-ul-h3 h-3-margin ">
                                    Legal
                                </h3>
                                <li className="main-footer-2-ul-li"> Terms & Conditions</li>
                                <li className="main-footer-2-ul-li"> Cookie Policy</li>
                                <li className="main-footer-2-ul-li"> Privacy Policy</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <p className="CopyRight">
                    &copy; 2023 Mosin Shaikh | All Rights Reserved
                </p>
            </div>
        </>
    );
};