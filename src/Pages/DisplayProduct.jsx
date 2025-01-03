import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";

const DisplayProduct = () => {
const [mydata ,setMydata]=useState([]);

const loadData=()=>{
    let api="http://localhost:3000/product";
    axios.get(api).then((res)=>{
     setMydata(res.data);
    })
}

useEffect(()=>{
    loadData();
})

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td> {key.name} </td>
            <td> {key.price} </td>
            <td> <ImCross /></td>
        </tr>
        
        </>
    )
})
  return (
    <div>
     <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>delete</th>
        </tr>
        {ans}
     </table>

    </div>
  )
}

export default DisplayProduct