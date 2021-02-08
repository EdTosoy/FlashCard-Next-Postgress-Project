import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useMeQuery, useLogoutMutation, User } from "../generated/graphql";
import { setAccessToken } from "../lib/accessToken";

export default function Header() {
  let router = useRouter();
  const { data } = useMeQuery({
    fetchPolicy: "network-only",
    
  });
  const [logout, { client }] = useLogoutMutation();
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
      pathname: "/blog",
    },

    {
      name: "contact",
      pathname: "/#contact",
    },
  ];
  const handleLogOut = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await logout();
    setAccessToken("");
    await client.resetStore();
    router.push("/");
    window.location.reload();
  };

  let userLogedIn: any;
  if (data) {
    userLogedIn = data.me;
  }
  return (
    <header
      className="bg-white grid-container border-b sticky top-0 z-50  "
      id="home"
    >
      <main className="col-start-2 col-end-3 flex items-center justify-between py-4">
        <div className="">
          <a href="/#">PHONE</a>
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
        <div className="flex items-center">
          <div className="md:hidden grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full">
            <box-icon name="menu"></box-icon>
          </div>
          <div className="grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full">
            <Link href="/cart">
              <box-icon name="cart"></box-icon>
            </Link>
          </div>
          {userLogedIn ? (
            <div className="grid place-content-center p-2 hover:bg-gray-200 cursor-pointer  rounded-full">
              <Link href="/auth">
                <box-icon name="user-circle"></box-icon>
              </Link>
            </div>
          ) : (
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          )}
        </div>
      </main>
    </header>
  );
}
