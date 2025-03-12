import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import {
  burgers,
  combos,
  drinks,
  chickens,
  chips,
  salads,
  
 
} from "../product";

const ProductDetails = () => {
  const {_id} = useParams();
  const [selectedCategorys, setSelectedCategory] = useState([]);
  const product =selectedCategorys.find((products) => product._id == _id);
  return (
    <>
    <section className='container mx-auto'>
      <div>
        {selectedCategorys.map((products) => { const{ _id, image, title, ratingicon, rating, price, duration } = products;
      return(
        <div key={_id}>
          <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        </div>

      )} )}
      </div>

    </section>
     
      
    </>
  )
}

export default ProductDetails
