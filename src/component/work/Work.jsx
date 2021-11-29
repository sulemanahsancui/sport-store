import React, { useState, useEffect } from "react";
import "./work.scss";
import axios from "axios";

const Work = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://sport-store-cricket.herokuapp.com/api/items")
      .then((res) => {
        setItems(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h1>Product</h1>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem", marginTop: "4px" }}>
              <img
                src={item.img}
                class="card-img-top img-fluid "
                alt="img"
                style={{ height: "15rem" }}
              />
              <div class="card-body">
                <h5 class="card-title">Name :{item.name}</h5>
                <h6 class="card-text">Price: {item.price}</h6>
                <h6 class="card-text">Stock :{item.stock}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
