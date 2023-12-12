import React from 'react';

function UpdateProduct() {
  return (
    <>
      <h2>UPDATE PRODUCTS</h2>
      <div>{/* <UserPage products={{ products }} /> */}</div>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <br /> <br />
        <button type="button" onClick={addProduct}>
          UPDATE PRODUCT
        </button>
      </form>
    </>
  );
}
