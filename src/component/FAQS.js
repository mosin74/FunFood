import { useState } from "react"

const Section = ({ isVisible, Answer, title, setHide, setIsVisible }) => {

    return (
        <>
            <div className="Help-p">
                <p className="UpperBody-p-h1">{title}</p>
                {

                    isVisible ?
                        <>
                            <button onClick={() => { setHide(false) }}>
                                Hide
                            </button>
                            <p className="Help-Ans UpperBody-p-h1">{Answer}</p>

                        </>
                        :
                        <>
                            <button onClick={()=>{setIsVisible(true)}}>
                                Show
                            </button>
                        </>

                }
            <hr />
            </div >

        </>
    )

}



const FAQS = () => {

    [isFAQS, setIsFAQS] = useState(false);
    return (
        <>
            <h2>
                FAQS
            </h2>
            <Section
                title="Question"
                Answer="Answer"
                setIsVisible={() => { setIsFAQS("1") }}
                isVisible={isFAQS == "1"}
                setHide={() => { setIsFAQS(false) }}

            />
            <Section
                title="Question"
                Answer="Answer"
                setIsVisible={() => { setIsFAQS("2") }}
                isVisible={isFAQS == "2"}
                setHide={() => { setIsFAQS(false) }}

            />            <Section
                title="Question"
                Answer="Answer"
                setIsVisible={() => { setIsFAQS("3") }}
                isVisible={isFAQS == "3"}
                setHide={() => { setIsFAQS(false) }}

            />            <Section
                title="Question"
                Answer="Answer"
                setIsVisible={() => { setIsFAQS("4") }}
                isVisible={isFAQS == "4"}
                setHide={() => { setIsFAQS(false) }}

            />
        </>
    )
}

export default FAQS;