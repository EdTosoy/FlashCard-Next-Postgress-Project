import Image from "next/image";
import { useState } from "react";
import CartItems from "./CartItems";
export default function CartList() {
  const [cart, setCart] = useState(0);
  return (
    <div className="bg-gray-100 h-screen">
      <div className="grid-container py-10 mb-6 border-b  bg-white">
        <div className="col-start-2 col-end-3 text-xl text-red-600  ">
          PAGENAME <span className="font-light">&#65372;</span> Shopping Cart
        </div>
      </div>
      {cart == 0 ? (
        <div className="grid place-content-center col-start-2 col-end-3">
          <div className=" text-red-500 text-2xl font-light mt-10 border-dashed border-red-400 p-10 border rounded-lg  ">
            There's no Item in this Cart
          </div>
        </div>
      ) : (
        <CartItems />
      )}
    </div>
  );
}
