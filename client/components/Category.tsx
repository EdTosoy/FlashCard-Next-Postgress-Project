import Image from "next/image";
import Link from "next/link";

export default function Category() {
  const categories = [
    {
      name: "SmartPhones",
      img: "/images/collection_01.png",
      text: "New Colors Introduced",
    },
    {
      name: "Accessories",
      img: "/images/collection_02.png",
      text: "New Accessory Preset",
    },
  ];
  return (
    <section className="grid-container pt-20 pb-10 " id="category">
      <main className="col-start-2 col-end-3 grid md:grid-cols-2  gap-10">
        {categories.map(({ name, img, text }) => (
          <div
            className="p-4 border flex gap-4 justify-around items-center shadow-lg rounded-xl  "
            key={name}
          >
            <div className="  ">
              <Image src={img} width={130} height={180} />
            </div>
            <div className="">
              <p>{text}</p>
              <h1 className="text-2xl md:text-3xl mb-4">{name}</h1>
              <button className="rounded-full shadow-2xl transform hover:scale-105  py-2 px-5 bg-gradient-to-tr from-purple-600 to-red-400 text-white ">
                <Link href="/shop">
                  <a>Shop Now</a>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
