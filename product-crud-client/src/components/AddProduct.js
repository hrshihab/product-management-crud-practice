import React, { useState } from 'react';

const AddProduct = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const quantity = form.quantity.value;
    const amount = form.amount.value;
    //console.log(productName, quantity, amount);
    const data = {
      productName,
      quantity,
      amount,
    };

    try {
      const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('success', result);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" id="" placeholder="productName" />
        <br />
        <input type="text" name="quantity" id="" placeholder="quantity" />
        <br />
        <input type="text" name="amount" id="" placeholder="amount" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
