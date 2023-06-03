
/*eslint-disable*/
import React,{useEffect,useState} from "react";
import { UserDetailsApi } from "../services/Api";
 
const Home =() => {

  const[user,setUser]=useState({});
  const[isuser,setIsUser]=useState(false);
  useEffect(() => {
    UserDetailsApi().then(response => response.json())
    .then((res)=>
      
    {
      
      setIsUser(true);
      setUser(res);
      
    })
    .catch((error)=>{
        console.log(error);
    });

  }, []);
 console.log(user)
    return (
      <div>
 { isuser  ?  <div >
          
           Hello Your email id is {user?.users[0]?.email}!!!!
         </div>: "Loading..."} 
        </div>
    )
}
 
export default Home;