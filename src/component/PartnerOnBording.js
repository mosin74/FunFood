import { useState } from "react"

const Section= ({ title, info, isVisible, SetisVisble , isHide }) => {
    return (
        <>
        <div className="Help-p">
            <p className="UpperBody-p-h2">{title}</p>
            {
                isVisible ?
                    <>

                        <button onClick={() => {
                            isHide(false)
                        }}>
                            Hide</button>
                        <p className="Help-Ans UpperBody-p-h2">{info}</p>
                </>
                    :
                    <>
                        <button onClick={() => {
                            SetisVisble(true)
                        }}>Answer</button>
                    </>
                 
            }
                <hr></hr>
        </div>
        </>
    )
}





const OnBording = () => {
    const [VisibleOnBording, setVisibleOnBording] = useState("");
    return (<>
<h2>
        Partner Onboarding
    </h2>
        <Section
            title="What are the mandatory documents needed to list my restaurant on Swiggy?"
            info="-Copies of the below documents are mandator

                  -  FSSAI Licence OR FSSAI Acknowledgement

                  -  Pan Card

                  -  GSTIN Certificate

                  -  Cancelled Cheque OR bank Passbook

                  -  Menu"
            isVisible={VisibleOnBording === "1"}
            SetisVisble={() => setVisibleOnBording("1")}
            isHide={()=>{setVisibleOnBording(false)}}
        />
        <Section
            title="After I submit all documents, how long will it take for my restaurant to go live on Swiggy?"
            info="After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."
            isVisible={VisibleOnBording === "3"}
            SetisVisble={() => setVisibleOnBording("3")}
            isHide={()=>{setVisibleOnBording(false)}}

        />
        <Section
            title="What is this one time Onboarding fees? Do I have to pay for it while registering?"
            info="This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy."
            isVisible={VisibleOnBording==="4"}
            SetisVisble={() => setVisibleOnBording("4")}
            isHide={()=>{setVisibleOnBording(false)}}

        />
                <Section
            title="How much commission will I be charged by Swiggy?"
            info="The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled."
            isVisible={VisibleOnBording==="5"}
            SetisVisble={() => setVisibleOnBording("5")}
            isHide={()=>{setVisibleOnBording(false)}}

        />
                        <Section
            title="I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?"
            info="FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration."
            isVisible={VisibleOnBording==="6"}
            SetisVisble={() => setVisibleOnBording("6")}
            isHide={()=>{setVisibleOnBording(false)}}

        />
    </>)
}

// isvisible={sectionVisible === "YOU can do it"}
//                 SetIsvisible={() => setSectionVisible("YOU can do it")}
export default OnBording;
// import { useState } from "react";

// const Section = ({ title, info, isvisible, SetIsvisible}) => {
//     return (
//         <>
//             <hr />
//             <h3>{title}</h3>
//             {
//                 isvisible ?
//                     <>
//                     <button
//                         onClick={() => {
//                             SetIsvisible(false)
//                         }}>Hide
//                     </button>
//                     <p>{info}</p>
//                     </>
//                     :
//                     <>
//                     <button
//                         onClick={() => {
//                             SetIsvisible(true)
//                         }} >Show
//                     </button>
//                     </>
//             }
//             {/* {isvisible && <p>{info}</p>} */}
//             <hr />

//         </>
//     )

// };
// const Onboarding = () => {

//     const [sectionVisible, setSectionVisible] = useState("");


//     return (
//         <>

//             <Section
//                 title={"YOU can do it"}
//                 info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
//                 isvisible={sectionVisible === "YOU can do it"}
//                 SetIsvisible={() => setSectionVisible("YOU can do it")}
             
//             />

//             <Section
//                 title={"I can "}
//                 info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
//                 isvisible={sectionVisible === "I can "}
//                 SetIsvisible={() => setSectionVisible("I can ")}
              


//             />

//             <Section
//                 title={"AND I WILL "}
//                 info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
//                 isvisible={sectionVisible === "AND I WILL"}

//                 SetIsvisible={() =>
//                     setSectionVisible("AND I WILL")
//                 }
           


//             />



//         </>
//     )
// }

// export default Onboarding;