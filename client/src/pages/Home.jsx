import React from "react";
import searchBar from "../assets/searchBar-icon.svg";
import search from "../assets/search.svg";
import Productsection from "../utils/Productsection";
import Searchbar from "../utils/Searchbar";
import Products from "../utils/Products";

const Home = () => {
  return (
    <>
      <main className="bg-[#2F2F2F]">
        {/* Homepage Article */}
        <article className="wrapper">
          {/* Homepage  Article Section 1  */}

          <section>
            {/* searchbar div */}
            <div>
              <Searchbar />
            </div>

            {/* Products div */}
            <div>
              <Productsection />
            </div>
          </section>
          {/*Homepage Article Section 2  */}
          <section>
            <Products/>
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;
