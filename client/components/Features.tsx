import Image from "next/image";

export default function Features() {
  const elements = [
    {
      name: "FREE SHIPPING WORLD WIDE",
      icon: "donate-heart",
    },
    {
      name: "100% MONEY BACK GUARANTEE",
      icon: "credit-card-front",
    },
    {
      name: "90 DAYS WARRANTY",
      icon: "calendar",
    },
    {
      name: "24/7 ONLINE SUPPORT",
      icon: "message-detail",
    },
  ];
  return (
    <section className="grid-container bg-gray-100 py-20 ">
      <main className="col-start-2 col-end-3 grid md:grid-cols-4 gap-4">
        {elements.map(({ name, icon }) => (
          <div className=" text-center  py-5 px-10  bg-white" key={name}>
            <div className="grid place-content-center mb-4 ">
              <box-icon name={icon} size="lg"></box-icon>
            </div>
            <p>{name}</p>
          </div>
        ))}
      </main>
    </section>
  );
}
