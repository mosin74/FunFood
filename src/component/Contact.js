import { useState } from "react";

const Section = ({ title, info, isvisible, SetIsvisible}) => {
    return (
        <>
            <hr />
            <h3>{title}</h3>
            {
                isvisible ?
                    <>
                    <button
                        onClick={() => {
                            SetIsvisible(false)
                        }}>Hide
                    </button>
                    <p>{info}</p>
                    </>
                    :
                    <>
                    <button
                        onClick={() => {
                            SetIsvisible(true)
                        }} >Show
                    </button>
                    </>
            }
            {/* {isvisible && <p>{info}</p>} */}
            <hr />

        </>
    )

};
const Contact = () => {

    const [sectionVisible, setSectionVisible] = useState("");


    return (
        <>

            <Section
                title={"YOU can do it"}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                isvisible={sectionVisible === "YOU can do it"}
                SetIsvisible={() => setSectionVisible("YOU can do it")}
             
            />

            <Section
                title={"I can "}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                isvisible={sectionVisible === "I can "}
                SetIsvisible={() => setSectionVisible("I can ")}
              


            />

            <Section
                title={"AND I WILL "}
                info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                isvisible={sectionVisible === "AND I WILL"}

                SetIsvisible={() =>
                    setSectionVisible("AND I WILL")
                }
           


            />



        </>
    )
}

export default Contact;