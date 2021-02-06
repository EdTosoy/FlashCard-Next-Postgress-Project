import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile1.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "1",
    },
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile2.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "2",
    },
    {
      text:
        "Praesent pharetra rhoncus dictum. Morbi fermentum vestibulum lectus, in vestibulum libero.",
      img: "/images/profile3.jpg",
      name: "Mark william",
      company: "ABC Company",
      id: "3",
    },
  ];
  return (
    <section className="grid-container bg-testimonialBG bg-no-repeat bg-right py-32">
      <main className="col-start-2 col-end-3">
        <h1 className=" text-2xl md:text-4xl">What our Customers say</h1>

        <div className="flex-row md:flex mt-10 md:mt-20 ">
          {testimonials.map(({ name, img, company, text, id }) => (
            <div
              className=" bg-gradient-to-tr from-purple-300 to-red-200 max-w-sm rounded-3xl transform cursor-pointer mb-4"
              key={id}
            >
              <div className=" border p-8  rounded-3xl  ">
                <div className="rounded-full overflow-hidden relative w-14 h-14 shadow-md py-2 border-4 border-white ring-1 ring-black mb-4  ">
                  <div className="">
                    <Image src={img} layout="fill" />
                  </div>
                </div>
                <p className="mb-4">{text}</p>
                <h1 className="font-semibold ">{name}</h1>
                <cite className="text-xs">{company}</cite>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
