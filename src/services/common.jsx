export const setUser=(data)=>{
localStorage.setItem('token',data.idToken )
}

export const getUser=()=>{
  
   return  localStorage.getItem('token')  
}

export const removeUser=()=>{
    localStorage.removeItem('token');
}
