import React from "react";
import { allSections } from "../sections";

const Productsection = () => {
  return (
    <>
      <main className="">
        {/* Product Section */}
        <section className="flex justify-between w-full rounded-[101px] bg-[#252422] p-4">
          <div className="carousel   lg:space-x-14  space-x-20 px-5">
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
          </div>
        </section>

        {/* product section  */}
        {/* <section className='flex justify-between w-full bg-[#252422] opacity-[40%] rounded-[101px] '>
        {allSections.map((allSection) => {
          const {
            _id, image,title,
          } = allSection;
          return(
            <div key={allSection._id}>
              <div className="card  w-[115px] h-[152px] gap-[4px] shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={allSection.image}
      alt="Products"
      className="rounded-xl w-[120px] h-[100px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[25px] hover:text-white text-[#777775] font-[500] leading-[]">{allSection.title}</h2>
  </div>
</div>

            </div>
          )
        })}
      </section> */}
      </main>
    </>
  );
};

export default Productsection;
