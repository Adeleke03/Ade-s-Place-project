import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <>
      <main
        className="bg-[url(https://res.cloudinary.com/diww44oar/image/upload/v1741087297/Frame-_Hero_aermab.svg)] 
        bg-no-repeat bg-cover bg-center w-full h-[300px] lg:h-[600px] flex justify-center items-center opacity-93"
      >
        {/* section */}
        <section className="w-[700px] flex flex-col items-center text-center gap-[40px]">
          {/* div for context */}
          <div className="p-2 lg:p-0">
            <h1 className="text-white whitespace-pre-wrap lg:text-[56px] text-[50px] font-[500] lg:tracking-[7%] md:leading-[74.09px]">
              The{" "}
              <span className="text-[#B67B0F] font-[800] text-[56px] font-Rammetto md:leading-[94.58px] md:tracking-[7%]">
                ZING
              </span>{" "}
              is in every bite{" "}
            </h1>
            <p className="text-white md:text-[28px] md:leading-[37.04px] font-[500]">
              Savor the flavor! Explore our delicious menu and order now for a
              taste sensation!
            </p>
          </div>

          {/* div for Order now and View Menu Button */}
          <div className="hidden lg:flex gap-[12px]">
            <button className="bg-[#B67B0F] rounded-[31px] py-[15px] text-white px-[56px] text-[20px] leading-[26.46px]">
              Order Now!
            </button>
            <button className="bg-[#FBFBFB] rounded-[32px] py-[15px] px-[20px] leading-[26.46px] text-[20px] font-[500]">
              View Menu
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
