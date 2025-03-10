import React from 'react'
import {
  burgers,
  combos,
  drinks,
  chickens,
  chips,
  salads,
  allProducts,
} from "../product";

const Cart = () => {
  return (
    <>
    <main className='bg-[#2F2F2F] '>
      {/* SECTION FOR CART PAGE  */}
      <section className='grid lg:grid-cols-3 wrapper'>
        {/* div for cart  */}
        <div className='col-span-2 bg-black'>
          <h2 className='text-white border-b-[2px] border-b-white text-[24px] leading-[100%]'>Cart 2</h2>

        </div>
        {/* div for summary */}
        <div>
          <h2 className='text-[24px] leading-[100%] text-white'>Summary</h2>

        </div>

      </section>
      {/* section for similar products */}
      <section className='wrapper'>
        {burgers.slice(3, 6).map((burger) => { const{ _id, image, title, description, ratingicon, rating, price, duration

        } = burger;
        
        
        
        
        
        
        return(
          <div key={burger._id}>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


          </div>
        )})}
      </section>

    </main>
      
    </>
  )
}

export default Cart
