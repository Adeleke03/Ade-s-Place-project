import React from "react";
import { allSections } from "../sections";

const Productsection = () => {
  return (
    <>
      <main className="">
        {/* Product Section */}
        <section className="flex justify-between w-full rounded-[101px] bg-[#252422] p-4">
        <div className="carousel carousel-center lg:w-full  space-x-20 lg:space-x-13 px-2">
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
      className="rounded-box" />
      <p>Burger</p>
  </div>
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
      className="rounded-box" />
      <p>Combos</p>
  </div>
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
      className="rounded-box" />
      <p>Drinks</p>
  </div>
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
      className="rounded-box" />
      <p>Chicken</p>
  </div>
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chips_yn9jhf.svg"
      className="rounded-box" />
      <p>Chips</p>
  </div>
  <div className="carousel-item flex flex-col items-center text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
    <img
      src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
      className="rounded-box" />
      <p>Salads</p>
  </div>
</div>
        </section>

      
      </main>
    </>
  );
};

export default Productsection;

{/* <div className="carousel   lg:space-x-14  space-x-20 px-5">
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
        className="rounded-box"
      />
      <figcaption>Burger</figcaption>
    </figure>
  </div>
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
        className="rounded-box"
      />
      <figcaption>Combos</figcaption>
    </figure>
  </div>
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
        className="rounded-box"
      />
      <figcaption>Drinks</figcaption>
    </figure>
  </div>
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
        className="rounded-box"
      />
      <figcaption>Chicken</figcaption>
    </figure>
  </div>
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chips_yn9jhf.svg"
        className="rounded-box"
      />
      <figcaption>Chips</figcaption>
    </figure>
  </div>
  <div className="carousel-item ">
    <figure className="text-[25px] text-[#aeaea7] hover:text-white opacity-70 hover:opacity-100">
      <img
        src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
        className="rounded-box"
      />
      <figcaption>Salads</figcaption>
    </figure>
  </div>
</div> */}