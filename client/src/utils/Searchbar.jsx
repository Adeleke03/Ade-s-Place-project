import React from 'react'

const Searchbar = () => {
  return (
    <div>
      {/* form input for search bar  */}
      <form >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for something..."
                className="w-full h-[56px] rounded-[32px] bg-[#F0F0F0] placeholder:text-[#100101] outline-none ps-[30px] border font-[400] text-[20px]"
              />
              {/* <img className='ab' src={searchBar} alt="" /> */}
            </form>
      
    </div>
  )
}

export default Searchbar
