import { useContext } from "react";
import userContex from "../../utils/userContext";


const About =()=>{
    const {user}=useContext(userContex);
return (
    <>

    <h1>
    {user.name}
    </h1>
    <h1>
    {user.email}
    </h1>
    <h1>About us page  </h1>
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ipsam consectetur nobis dolorum soluta tempora voluptatum sit ullam labore rem natus inventore rerum numquam quis itaque autem ut perferendis libero quisquam quia, perspiciatis delectus? Natus pariatur aspernatur maiores doloribus? Deserunt provident eos quod saepe, sapiente nesciunt fugit vel fuga quos.</h3>
    </>
);
};

export  default About;