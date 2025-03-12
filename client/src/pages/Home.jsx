import React,{useState} from 'react';
import Searchbar from "../utils/Searchbar";
import Productsection from "../utils/Productsection";
import Hero from '../layouts/Hero';

const Home = ({handleAddToCart}) => {
  return (
    <>
    <section className=" bg-[#2F2F2F]">
        {/* div for Hero dispay */}
        <div>
          {<Hero/>}

        </div>
      <div className='wrapper'>
        {/* div for search bar  */}
        <div className='lg:hidden py-6'>

        {<Searchbar/>}
        </div>
        {/* div for product section */}
        <div>
          {<Productsection handleAddToCart= {handleAddToCart} />}
        </div>

      </div>

    </section>

      
    </>
  )
}

export default Home














// import React, { useState } from "react";
// import Productsection from "../utils/Productsection";
// import { burger, combos, chickens, drinks, chips, salads, allProducts } from "../utils/Product";

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(cheese);

//   return (
//     <>
//       <main className="bg-[#2F2F2F]">
//         <article className="wrapper">
//           {/* Searchbar */}
//           <div className="lg:hidden py-6">
//             <Searchbar />
//           </div>

//           {/* Category Buttons */}
//           <div className="flex gap-4 justify-center py-4">
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(burger)}>Burgers</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(combos)}>Combos</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(chickens)}>Chicken</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(drinks)}>Drinks</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(chips)}>Chips</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(salads)}>Salads</button>
//             <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setSelectedCategory(allProducts)}>All</button>
//           </div>

//           {/* Product Section */}
//           <section>
//             <Productsection />
//           </section>

//           {/* Product Display */}
//           <section>
//             <Products items={selectedCategory} />
//           </section>
//         </article>
//       </main>
//     </>
//   );
// };

// export default Home;
