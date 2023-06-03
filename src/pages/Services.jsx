import React  from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom"


/* In version 6 the useHistory hook is replaced with use Navigate Hook */
const Services = () => {

    let navigate = useNavigate();
    function handleClick() {
       navigate("/products");

       /* naviagte (-1)  acts as back */
      }
 
    return (
        <div >
          
          Welcome to Services Page!!!!

          <button type="button" onClick={handleClick}>
      Go Prodcuts
    </button>
        </div>
    )
}
 
export default Services;