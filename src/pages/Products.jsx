import React  from "react";
import {  Link,Outlet } from 'react-router-dom';


const Products = () => {
    
 
    return (
        <div >
          
          Welcome to Products Page!!!!

          
     <nav>
      <div >
       <Link to="oldProducts" style={{padding:'10px'}}>Old Products</Link>
       <Link to="newProducts" style={{padding:'10px'}}>New Prodcuts</Link>
       
       </div>
     </nav>
     <Outlet/>
        </div>
    )
}
 
export default Products;