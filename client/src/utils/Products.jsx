import React from 'react'
import { productSections } from "../product";
import Productsection from './Productsection';

const Products = () => {
  return (
    <>
    <main className='container mx-auto my-8'>
      <div className='grid lg:grid-cols-3 lg:gap-y-[54px] lg:gap-x-[15px] gap-[44.46px]'>
        {productSections.map((productSection) => {
          const {
            _id, image, title,ratingicon, rating, price, duration,
          } = productSection;
          return(
            <div key={productSection._id}>
              <div className="card bg-[#aeaea7] p-3 w-67 mx-auto shadow-sm">
  <figure>
    <img
      src={image}
      alt="cheese burger" />
  </figure>
  <div className="card-body">
    {/* div  for title and rating icon  */}
    <div className='flex justify-between'>

    <h2 className="card-title text-[20px] font-[500] leading-[100%]">{title}</h2>
      <figure className='border-[1px] border-[#B67B0F] rounded-[6px] py-[6px] px-[4px]'>
        <img src={ratingicon} alt="" />
        <figcaption>{rating}</figcaption>
      </figure>
    </div>
    {/* div for price & and duration  */}
        <div className='flex justify-between items-center'>
      <h3 className='text-[#B67B0F]'>&#8358; {price}</h3>
      <p className='text-[#FBFBFB]'>{duration}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>

            </div>
          )
        })}

      </div>
    </main>
      
    </>
  )
}

export default Products
