import Image from "next/image";

export default function CartItems() {
  return (
    <div className="grid-container ">
      <div className="col-start-2 col-end-3 ">
        <div className=" grid grid-cols-8 bg-white  border rounded-md  p-4 mb-4 ">
          <p className="col-span-4 pl-10 "> Product</p>
          <p className="text-gray-400">Unit Price</p>
          <p className="text-gray-400">Quantity</p>
          <p className="text-gray-400">Total Price</p>
          <p className="text-gray-400 justify-self-end mr-10 ">Actions</p>
        </div>
        <div className="border">
          <div className=" grid grid-cols-8 bg-white items-center  border-b rounded-md  p-4 ">
            <p className="col-span-4 pl-10  grid grid-cols-2 items-center   ">
              <div className="relative w-16  h-24">
                <Image
                  src="/images/products/sumsung/samsung1.jpeg"
                  layout="fill"
                />
              </div>
              <p>Sony WH-CH510</p>
            </p>
            <p className="">$ 20</p>
            <p className="">1</p>
            <p className="text-red-500">$ 20</p>
            <button className="p-2 hover:bg-gray-200 rounded-md text-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
