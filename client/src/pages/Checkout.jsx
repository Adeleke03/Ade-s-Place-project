import React, { useState, useContext } from "react";
import CartContext from '../context/CartContext';

const Checkout = () => {
  const {cart, setCart} = useContext(CartContext)
  const totalPrice = cart.reduce((total,product)=> total + parseFloat(product.price) * product.quantity, 0)
  const [isEditing, setIsEditing] = useState(true);
  const [recipient, setRecipient] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [deliveryInformation, setDeliveryInformation] = useState({address:""});

  const [formData, setFormData] = useState(recipient);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipient(formData);
    setIsEditing(false);
  };

  return (
    <main className="bg-[#2F2F2F]">
      {/* section for checkout user information and Summary */}
      <section className="text-white wrapper grid lg:grid-cols-3 gap-[20px]">
        {/* div for checkout delivery information */}
        <div className="lg:col-span-2 h-fit bg-black  rounded-[10px] py-3 p-[15px] gap-[14px]">
          {/* Recipient Information */}
          <div>
            {isEditing}
          </div>
         
        </div>

        {/* div for summary */}
        <div className="rounded-[10px] bg-black p-[15px] h-fit ">
        <h2 className='text-[24px] leading-[100%] text-white py-4'>Summary</h2>
          {/* div for summary content */}
          <div className="bg-[#252422] rounded-[8px] py-3">
             {/* div for product total */}
             <div className="flex justify-between p-[10px]">
                  <h3 className="text-white text-[18px]">Product Total({(cart.length)})</h3>
                  <p className="text-[#B67B0F] text-[18px]">&#8358; {totalPrice}</p>
                </div>
                  {/* div for vat */}
                  <div className="flex justify-between p-[10px]">
                  <h3 className="text-white text-[18px]">VAT</h3>
                  <p className="text-[#B67B0F] text-[18px]">&#8358; 1000</p>
                </div>
                {/* div for delivery */}
                <div className="flex justify-between border-b-[2px] border-b-white p-[10px]">
                  <h3 className="text-white text-[18px]">Delivery</h3>
                  <p className="text-[#B67B0F] text-[18px]">&#8358; 1,500</p>
                </div>
                {/* div for total */}
                <div className="flex justify-between">
                  <h3 className="text-white text-[18px] p-[10px]">Total</h3>
                  <p className="text-[#B67B0F] text-[18px]">&#8358; {(totalPrice + 2500).toLocaleString()}</p>
                </div>

          </div>
            {/* div for button */}
            {/* <Link to="Paynow"> */}
            <div className="py-4">
                <button className=" bg-[#B67B0F] leading-[100%] w-full rounded-[31px] lg:whitespace-nowrap py-[15px] px-[56px] md:text-base text-white">
                  Pay Now
                </button>
              </div>
            {/* </Link> */}
           
        </div>
      </section>
    </main>
  );
};

export default Checkout;
