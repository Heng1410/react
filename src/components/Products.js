import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);
  const listProducts = products.map((products) => (

      <div className="col-md-3" key={products.id}>
      
          <div className="card">
            <img src={products.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-text">{products.description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>


  ));
  return (
    <div>
      <div className="container row">
        {loading ? <h2>Loading...</h2> : listProducts}
      </div>
    </div>
  );
}
export default Product;
