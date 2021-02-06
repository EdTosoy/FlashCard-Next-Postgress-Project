import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className=" pt-10 pb-20 ">
      <div className="grid-container">
        <main className="flex justify-between col-start-2 col-end-3 items-center ">
          <div className="text-lg max-w-md">
            <p className="mb-4 font-semibold text-red-500 ">
              New Inspiration 2020
            </p>
            <h1 className=" text-3xl md:text-5xl font- uppercase mb-4 -ml-1 ">
              Smart phone made for you.
            </h1>
            <p className="text-base text-gray-800 mb-4">
              trending smart phones and accessories style collection, Shop for
              the latest smartphone deals from Samsung, Apple, Oppo, LG, Asus
              and more.
            </p>
            <button className="rounded-full shadow-2xl transform hover:scale-105  py-3 px-5 bg-gradient-to-tr from-purple-600 to-red-400 text-white ">
              <Link href="/shop">
                <a>SHOW ME MORE</a>
              </Link>
            </button>
          </div>
          <div className="hidden md:block">
            <Image src="/images/banner_01.png" width={485} height={651} />
          </div>
        </main>
      </div>
    </section>
  );
}
