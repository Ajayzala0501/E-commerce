
import { useState, useEffect } from "react";
import axios from 'axios';

const Productlist = ()=>{
    const encodedToken = localStorage.getItem("token");

    useEffect(()=>{
        fetchProductLis();
    },[])
    const fetchProductLis = async () => {
        try {
          const response = await axios.get(`/api/products/1`, {
            headers: {
              authorization: encodedToken, // passing token as an authorization header
            },
          });
         console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <div>Product List</div>
    );
}
export default Productlist;