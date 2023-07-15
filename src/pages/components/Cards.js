import React from "react";

export default function Cards() {
  return (
    <div>
      {" "}
      <div
        className="card mt-3 bg-dark text-white"
        style={{ width: "18rem", maxHeight: "360px" }}
      >
        <img
          src="https://media.istockphoto.com/id/547046390/photo/garlic-bread.jpg?s=612x612&w=0&k=20&c=oArNgkbjjPKlToDnBhL7xNwU4_eJLPTaLbAlIuunHDY="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Food item</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
