import React, { useState } from "react";
import { useParams,  } from "react-router-dom";
import {
  burgers,
  combos,
  drinks,
  chickens,
  chips,
  salads,
  
 
} from "../product";


const ProductDetails = () => {
  const [selectedCategorys, setSelectedCategory] = useState([burgers], [combos], [drinks], [chickens]  [chips], [salads]);
  console.log(selectedCategorys);
  
  
  const { _id } = useParams();
  
 
  const product = selectedCategorys.find((item) => (item._id) === (_id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className='container mx-auto'>
      {selectedCategorys.map((product) => {
        const { _id, image, title, ratingicon, rating, price, duration } =
        product;

      <div>
        <div key={product._id}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={image} alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p> {title}...</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      } )}
    </section>
  );
};


export default ProductDetails;