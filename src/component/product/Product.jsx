import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    stock: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sport-store-cricket.herokuapp.com/api/items", item)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setItem({ id: "", name: "", price: "", img: "", stock: "" });
    navigate("/work");
  };

  const { id, name, price, img, stock } = item;
  return (
    <div className="container">
      <h1>Add product</h1>
      <from>
        <div className="mb-4">
          <label htmlFor="_id" className="form-control">
            Product Id
          </label>
          <input
            type="number"
            id="_id"
            name="id"
            value={id}
            class="form-control"
            onChange={handlechange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="form-control">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            value={name}
            onChange={handlechange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="form-control">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            class="form-control"
            onChange={handlechange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="img" className="form-control">
            Product image
          </label>
          <input
            type="text"
            id="img"
            name="img"
            value={img}
            placeholder="paste image url ."
            class="form-control"
            onChange={handlechange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="form-control">
            Product Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={stock}
            class="form-control"
            onChange={handlechange}
          />
        </div>
        <button className="btn btn-primary" onClick={handlesubmit}>
          Send
        </button>
      </from>
    </div>
  );
};

export default Product;
