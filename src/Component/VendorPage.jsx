import React, { useState, useEffect } from 'react';

const VendorDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleNewProductChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === selectedProduct.id
            ? { ...selectedProduct, ...newProduct }
            : product
        )
      );
      setSelectedProduct(null);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...newProduct, id: Date.now().toString() },
      ]);
    }

    setNewProduct({
      id: '',
      name: '',
      price: '',
    });
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setNewProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '80%',
          height: '80%',
          textAlign: 'center',
        }}
      >
        <h2>Vendor Dashboard</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleNewProductChange}
            />
          </label>
          <br />
          <br />
          <label>
            Product Price:
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleNewProductChange}
            />
          </label>
          <br />
          <br />
          <button type="submit">
            {selectedProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
        <h3>Product List</h3>
        <div style={{ border: '2px solid black' }}>
          {products.map((product) => (
            <h3 key={product.id}>
              {product.name} - RS{product.price}
              <button
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  marginLeft: '30px',
                  cursor: 'pointer',
                }}
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
