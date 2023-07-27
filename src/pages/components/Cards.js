import React, { useState } from "react";
import { useCart, useDispatchChart } from "./ContextReducer";

export default function Cards(props) {
  let dispatch = useDispatchChart();
  let data = useCart();
  const option = props.options;
  const priceOption = Object.keys(option);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  return (
    <div>
      {" "}
      <div
        className="card mt-3 bg-dark text-white"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">Food item</p>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOption.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          <hr></hr>
          <button
            className="btn btn-success justify-centre ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
