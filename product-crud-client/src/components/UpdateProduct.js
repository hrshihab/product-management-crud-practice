import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
  const loadProducts = useLoaderData();
  const [products,setProducts] = useState(loadProducts);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

    const res = await  fetch(`http://localhost:5000/products/${products._id}`, {
        method:'PUT',
        headers:
        {
          'content-type' : 'application/json',
        },
        body: JSON.stringify(products)
      })

      const result = await res.json();
      console.log(result);
      if(result.modifiedCount > 0) {
        alert(`Successfully modified `);
      }
      
      
    } catch (error) {
      
    }

 

  
  };
  const handleChange= event => {
    const field = event.target.name;
    const value = event.target.value;

   const newProducts = {...products};
   newProducts[field] = value;
   setProducts(newProducts);

  }
  return (
    <div>
    <h2>Update product : {products.productName}</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} defaultValue={products.productName} name="productName" id="" placeholder="productName" />
      <br />
      <input type="text" onChange={handleChange} defaultValue={products.quantity}  name="quantity" id="" placeholder="quantity" />
      <br />
      <input type="text" onChange={handleChange} defaultValue={products.amount} name="amount" id="" placeholder="amount" />
      <br />
      <input type="submit" value="submit" />
    </form>
  </div>
  );
};

export default UpdateProduct;