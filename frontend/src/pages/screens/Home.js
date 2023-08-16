import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

export default function () {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      "https://fullstack-blond.vercel.app/api/foodData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);

    console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExample"
          className="carousel slide"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" style={{ maxHeight: "500px" }}>
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div class="d-flex justify-content-centre" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button
                  class="btn btn-outline-success bg-success text-white"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x700/?Burger"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?Pizza"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?Noodles"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr
                  id="hr-success"
                  style={{
                    height: "4px",
                    backgroundImage:
                      "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))",
                  }}
                />
                {foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                  )
                  .map((filterItem) => {
                    return (
                      <div
                        key={filterItem._id}
                        className="col-12 col-md-6 col-lg-3"
                      >
                        <Cards
                          foodItem={filterItem}
                          options={filterItem.options[0]}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })
        ) : (
          <div> No Such Data Found</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
