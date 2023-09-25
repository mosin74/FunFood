import logo1 from "../Images/dark.png"
import logo2 from "../Images/light.png"
import { useEffect, useState } from "react"
const DarkThem = () => {



    // const ToggleDark = () => {
    //     (Dark === "light-them")?
    //         setDark("dark-them")
    //         :
    //         setDark("light-them")

    // }


    const [Dark, setDark] = useState("light-them");
    const[isDarkTrue,setDarkTrue]=useState(false);
    // const [isDark, setIsdark] = useState("dark-them")
    useEffect(() => {
        document.body.className = Dark;
    },[Dark]);

    
    return (<>
        {
            isDarkTrue?
                <>
                    <img className="Them-logo"onClick={() =>{setDark("light-them"); setDarkTrue(false)}} src={logo2} alt="light" data-testid="ThemLogo"/>
                </>
                :
                <>
                    <img className="Them-logo"onClick={() =>{setDark("dark-them") ; setDarkTrue(true)}} src={logo1}alt="Dark" data-testid="ThemLogo" />
                </>
        }
    </>)

}

export default DarkThem;