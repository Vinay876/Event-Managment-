import React from 'react';

function UserPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || []);
  }, []);

  const handlePurchage = () => {
    window.location.href = '/purchage';
  };
  return (
    <>
      <h1>Welcome To the User Profile</h1>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <>
              <div>
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <button
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    marginLeft: '30px',
                    cursor: 'pointer',
                  }}
                  onClick={handlePurchage}
                >
                  Purchage
                </button>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                ></div>
              </div>
            </>
          );
        })}
      <a href="/">Back</a>
    </>
  );
}
export default UserPage;
