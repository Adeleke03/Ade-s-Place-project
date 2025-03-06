import React from 'react'
import { productSections } from "../product";
import Productsection from './Productsection';

const Products = () => {
  return (
    <>
    <main className='container mx-auto my-8'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[54px] lg:gap-x-[15px] gap-[44.46px] md:w-full'>
        {productSections.map((productSection) => {
          const {
            _id, image, title,ratingicon, rating, price, duration,
          } = productSection;
          return(
            <div key={productSection._id}>
              <div className="card bg-[#252422] text-[#FBFBFB] p-3 w-full mx-auto shadow-sm">
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
        <div className='flex place-items-center justify-between'>
      <h3 className='text-[#B67B0F] text-[31px] lg:whitespace-nowrap'><span className='text-[15px]'>&#8358;</span> {price}</h3>
      <h5 className='text-[#FBFBFB] text-[16px] lg:whitespace-nowrap'>{duration}</h5>
    </div>
    <div className="card-actions justify-end">
      <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base">Add to Cart</button>
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
