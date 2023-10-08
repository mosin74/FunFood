
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
const IncrDecrButton = ({Items}) => {
    const dispatch = useDispatch();

    const AddFoodItem = (Info) => {
        dispatch(addItem(Info));

    }
    [Qauntity, setQauntity] = useState("1");
    return <>


        {
            (AddFood) ? <button className=" Menu-Recommendation-Right-Button" onChange={() => {
                AddFoodItem((Items));
                setAddFood(false)
            }}> Add </button> : <button className=" Menu-Recommendation-Right-Button"><span onClick={() => { setQauntity(Qauntity - 1) }}>-</span><span>{Qauntity}</span><span onClick={() => { setQauntity(Qauntity + 1) }}>+</span></button>
        }
    </>
}

export default IncrDecrButton;



