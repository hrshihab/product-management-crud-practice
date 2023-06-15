import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
  const productsLoad = useLoaderData();
  const [products,setProducts] = useState(productsLoad);
  const handleDelete= product => {
    console.log('ok delete',product.productName);
     const agree= window.confirm(`Are you sure Delete ${product.productName}`);
     if(agree)
     {
      fetch(`http://localhost:5000/products/${product._id}`,
      {
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(result=> {
          const remainingProduct = products.filter(pd => pd._id !== product._id)
          setProducts(remainingProduct);
      })
      .catch(error=> console.error(error))
     }
   
  }
  return (
    <div>
      <h2>Our Total Products :  {products.length}</h2>
      <p>Name --- Quantity --- Amount</p>
      {
        products.map(product => <p key={product._id}>
          {product.productName} --- 
          {product.quantity} --- 
          {product.amount}---
          <Link  to={`/products/${product._id}`} ><button>Update</button></Link>-- 
          <button onClick={()=>handleDelete(product)}>X</button> 
        </p> )
      }
    </div>
  );
};

export default Products;