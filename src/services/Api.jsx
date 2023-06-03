
import { getUser } from "./common";
const API_KEY="AIzaSyDjJ7jimNbOokRCXo9zgRppTZR-QIz4d-o";

export const handleSignUp=(inputs)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
    };

    
   return  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, requestOptions)
        

}   
export const handleSignIn=(inputs)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
    };

    console.log(requestOptions)
   return  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, requestOptions)
        

}

export const UserDetailsApi = ()=>{
    let data = {idToken:getUser()}
  console.log("userDetails")
  console.log(data)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,requestOptions)
}

