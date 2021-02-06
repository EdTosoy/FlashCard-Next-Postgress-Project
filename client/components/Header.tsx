import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Header() {
  const nav = [
    {
      name: "home",
      pathname: "/",
    },
    {
      name: "category",
      pathname: "/#category",
    },
    {
      name: "shop",
      pathname: "/shop",
    },
    {
      name: "blog",
      pathname: "blog",
    },

    {
      name: "contact",
      pathname: "/#contact",
    },
  ];
  const icons = ["menu", "cart", "user-circle"];
  return (
    <header
      className="bg-white grid-container border-b sticky top-0 z-50  "
      id="home"
    >
      <main className="col-start-2 col-end-3 flex items-center justify-between py-4">
        <div className="">
          <a href="#">PHONE</a>
        </div>
        <div className="hidden md:flex ">
          {nav.map(({ name, pathname }) => (
            <nav key={name} className="uppercase ml-8 hover:text-red-600 ">
              <Link href={`${pathname}`}>
                <a>{name}</a>
              </Link>
            </nav>
          ))}
        </div>
        <div className="flex">
          {icons.map((element) => (
            <div
              className={`${
                element == "menu" && "md:hidden "
              } grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full`}
              key={element}
            >
              <Link href="/login">
                <box-icon name={element}></box-icon>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </header>
  );
}
