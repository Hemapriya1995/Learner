import {getUser} from './common';

export const isAuthenticated=()=>{
   
    return getUser()!==null ? true:false;
}