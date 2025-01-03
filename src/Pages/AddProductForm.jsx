import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios  from 'axios';
const AddProductForm = () => {

    const [input, setInput]=useState([]);

    const handleSubmit= async ()=>{
        
        let api="http://localhost:3000/product";
        axios.post(api,input).then((res)=>{
        alert("sucussefull")
        })
    }

    const handleInput=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }
  return (
  <>

  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text"
         placeholder="Enter Product Name" 
         name='name'
         value={input.name}
         onChange={handleInput}

          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="Number" 
        placeholder="Enter Price" 
        name='price'
        value={input.price}
        onChange={handleInput}
/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add Product
      </Button>
    
  </>  
  )
}

export default AddProductForm