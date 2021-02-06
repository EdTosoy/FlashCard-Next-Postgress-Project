export default function NewsLetter() {
  return (
    <section className="grid-container pt-20 pb-10 border-t-2 border-b-2" id="contact">
      <main className="col-start-2 col-end-3 grid md:grid-cols-2 items-center">
        <div className="">
          <h1 className="text-4xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p className="text-sm">
            A short sentence describing what someone will receive by subscribing
          </p>
        </div>
        <div className="rounded-full flex justify-between p-1 pl-4 border-2">
          <input
            type="text"
            name="email"
            id="email"
            aria-label="email"
            className="md:w-64"
            placeholder="John.doe@gmail.com"
          />
          <button className="rounded-full shadow-2xl transform hover:scale-105  py-3 px-8 bg-gradient-to-tr from-purple-600 to-red-400 text-white ">
            Subscribe
          </button>
        </div>
      </main>
    </section>
  );
}
