import { useState } from "react"

const Legal = () => {

    [isVisibleLegal, setIsVisibleLegal] = useState(false);
    return (
        <>
            <h2>
                Legal
            </h2>
            <Section
                title="Question"
                Answer="Answer"
                isVisible={isVisibleLegal == "1"}
                setIsVisible={() => { setIsVisibleLegal("1") }}
                setHide={()=>{setIsVisibleLegal(false)}}

            />
            <Section
                title="Question"
                Answer="Answer"
                isVisible={isVisibleLegal == "2"}
                setIsVisible={() => { setIsVisibleLegal("2") }}
                setHide={()=>{setIsVisibleLegal(false)}}


            />            <Section
                title="Question"
                Answer="Answer"
                isVisible={isVisibleLegal == "3"}
                setIsVisible={() => { setIsVisibleLegal("3") }}
                setHide={()=>{setIsVisibleLegal(false)}}


            />            <Section
                title="Question"
                Answer="Answer"
                isVisible={isVisibleLegal == "4"}
                setIsVisible={() => { setIsVisibleLegal("4") }}
                setHide={()=>{setIsVisibleLegal(false)}}


            />


        </>
    )
}

const Section = ({ title, Answer, isVisible, setIsVisible,setHide }) => {
    return (
        <>
            <div className="Help-p">
                <p className>{title}</p>

                {
                    isVisible ?
                        <>
                            <button onClick={() => {
                                setHide(false)
                            }}>Hide</button>
                            <p className="Help-Ans">{Answer}</p>
                        </>
                        :
                        <>
                            <button onClick={() => {
                                setIsVisible(true)
                            }}>Show</button>
                        </>
                }
        <hr />
            </div>
        </>
    )
}

export default Legal;