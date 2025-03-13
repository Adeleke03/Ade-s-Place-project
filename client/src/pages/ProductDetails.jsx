import React from 'react'
import { useParams } from "react-router-dom";
import {  menuProducts  } from "../product";

const ProductDetails = () => {
  const { id } = useParams();
  const products = menuProducts.find((item) => item._id == id);
  const relatedProducts = menuProducts.filter((item) => item._id !== id).slice(10, 14);
  return (
    <>
      <main className='container mx-auto px-4 md:px-16 py-6 bg-[#2F2F2F] text-white'>
        {/* section-1  */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Product Image */}
          <div>
                    <img src={products.image} alt={products.title} className='rounded-lg w-full max-w-md mx-auto' />
                </div>
                {/* Product Details */}
                <div>
                    <h1 className='text-3xl font-bold mb-4'>{products.title}</h1>
                    <p className='text-gray-300'>{products.description}</p>
                </div>

        </section>
         {/* Related Products */}
         <section className='mt-12'>
                <h2 className='text-2xl font-semibold mb-6'>Others You Might Like</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {relatedProducts.map((item) => (
                        <div key={item._id} className='bg-[#222] p-4 rounded-lg text-center'>
                            <img src={item.image} alt={item.title} className='rounded-lg mb-4' />
                            <h3 className='text-xl font-medium'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

      </main>
      
    </>
  )
}

export default ProductDetails
