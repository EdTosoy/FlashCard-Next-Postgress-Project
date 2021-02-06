export default function Footer() {
  const footerLink = [
    {
      title: "EXTRAS",
      sub1: "brands",
      sub2: "gift certificates",
      sub3: "affiliate",
      sub4: "specials",
      sub5: "sitemap",
    },
    {
      title: "INFORMATION",
      sub1: "About Us",
      sub2: "Privacy Policy",
      sub3: "Terns & conditions",
      sub4: "Contacts",
      sub5: "Supports",
    },
    {
      title: "MY ACCOUNT",
      sub1: "MY account",
      sub2: "Order history",
      sub3: "wish list",
      sub4: "newsletter",
      sub5: "returns",
    },
  ];
  return (
    <footer className="grid-container bg-gray-100 pt-20 pb-10">
      <main className="col-start-2 col-end-3 grid md:grid-cols-4 text-gray-700 ">
        {footerLink.map(({ title, sub1, sub2, sub3, sub4, sub5 }) => (
          <div className="capitalize mb-4" key={title}>
            <h1 className="mb-2 font-semibold text-lg ">{title}</h1>
            <div className="cursor-pointer">
              <p className="hover:text-red-400">{sub1}</p>
              <p className="hover:text-red-400">{sub2}</p>
              <p className="hover:text-red-400">{sub3}</p>
              <p className="hover:text-red-400">{sub4}</p>
              <p className="hover:text-red-400">{sub5}</p>
            </div>
          </div>
        ))}

        <div className="capitalize mb-4">
          <h1 className="mb-2 font-semibold text-lg ">CONTACT US</h1>
          <p>42 Dream House, Dreammy street, 7131 Dreamville, USA</p>
          <p>company@gmail.com</p>
          <p>456-456-4512</p>
          <p>Dream City, USA</p>
        </div>
      </main>
      <p className="col-start-2 col-end-3 text-center mt-10 text-sm">
        CopyRight© 2021 Stack Exchange Inc;
      </p>
    </footer>
  );
}
