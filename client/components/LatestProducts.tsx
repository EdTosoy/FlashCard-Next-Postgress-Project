import { Swiper, SwiperSlide } from "swiper/react";
import data from "products.json";
import Image from "next/image";

// Import Swiper styles
export default function LatestProducts() {
  const latestProducts = data.products.filter(
    (element) => element.category == "Special Products"
  );

  return (
    <div className="bg-white  col-start-2 col-end-3  pt-20 pb-10 ">
      <div className="text-center">
        <h1 className=" text-2xl uppercase ">Latest Products</h1>
        <p className="text-gray-700">Slide to see more</p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full py-10"
      >
        {latestProducts.map(({ id, title, image, price, category }) => (
          <SwiperSlide
            className="text-center text-lg hover:scale-105 transform "
            key={id}
          >
            <div
              className="border rounded-xl overflow-hidden shadow-sm relative py-5 px-6 cursor-pointer "
              key={id}
            >
              <div className="mb-4">
                <Image src={image} width={220} height={240} />
              </div>
              <h1>{title}</h1>
              <p className="text-red-500">${price}</p>
              <div
                className={`${
                  category != "" && "p-2"
                } absolute top-0 left-0  bg-red-400 rounded-br-lg text-white `}
              >
                {category == "Special Products" && "New"}
                {category == "Trending Products" && "Trend"}
              </div>
              <div className="absolute bottom-0 shadow-sm right-0 border flex flex-col p-1 rounded-tl-2xl opacity-0 hover:opacity-100  ">
                <div className="grid place-content-center p-2 hover:bg-gray-200 rounded-full cursor-pointer ">
                  <box-icon name="heart" color="red"></box-icon>
                </div>
                <div className="grid place-content-center p-2 hover:bg-gray-200 rounded-full cursor-pointer ">
                  <box-icon name="cart-alt"></box-icon>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
