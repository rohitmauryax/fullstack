import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

export default function () {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-3">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
