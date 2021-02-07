import Header from "../components/Header";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";

export default function blog() {
  const blogs = [
    {
      title: "Working Out At Home: Let’s Get Fit!",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi repellat, eveniet laboriosam dolore, fuga ipsam eum culpa maxime ex quam vero atque mini",
      author: "Tara Gallardo ",
      img: "/images/news1.jpg",
    },
    {
      title: "Mom’s Guide to Pregnancy Essentials",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi repellat, eveniet laboriosam dolore, fuga ipsam eum culpa maxime ex quam vero atque mini",
      author: "Ysa Lansang ",
      img: "/images/news2.jpg",
    },
    {
      title: " custom electric delivery vehicles are now hitting the road",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi repellat, eveniet laboriosam dolore, fuga ipsam eum culpa maxime ex quam vero atque mini",
      author: "",
      img: "/images/news3.jpg",
    },
    {
      title: "The Complete Nominations List ",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi repellat, eveniet laboriosam dolore, fuga ipsam eum culpa maxime ex quam vero atque mini",
      author: "Jordan Moreau",
      img: "/images/news4.jpg",
    },
    {
      title: "books, movies, shows, and songs that celebrate Black creators ",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi repellat, eveniet laboriosam dolore, fuga ipsam eum culpa maxime ex quam vero atque mini",
      author: "",
      img: "/images/news5.jpg",
    },
  ];
  return (
    <div>
      <Header />
      <div className="grid-container pt-20 ">
        <main className="col-start-2 col-end-3  ">
          <div className="text-center mb-4">
            <h1 className="text-2xl">PAGENAME BLOGS</h1>
            <p>Slide to see more</p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full py-10 "
          >
            {blogs.map(({ title, text, author, img }) => (
              <SwiperSlide className="  hover:scale-105 transform rounded-md border p-4 max-w-sm cursor-pointer  ">
                <div className="">
                  <Image src={img} width={300} height={300} />
                </div>
                <p className="text-sm text-justify ">{text}</p>
                <h1 className="text-xl font-semibold">{title}</h1>
                <cite className="block">-{author}</cite>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </div>
    </div>
  );
}
