import React from "react";
import AddProductForm from "./AddProductForm";
import DisplayProduct from "./DisplayProduct";
import Search from "./Search";


const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="homeup" >
          
          <h3>Add Product</h3>
        <AddProductForm />
        </div>
        <br />    
       <div className="homemid" >
          <h3>Search Product</h3>
          <Search/>
        </div> 
         <br />
        <div className="homedown" >
          <h3>List of Product</h3>
        <DisplayProduct />
        </div>
       </div>
        
      
    </>
  );
};

export default Home;
