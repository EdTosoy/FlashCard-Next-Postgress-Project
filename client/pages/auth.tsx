import Header from "../components/Header";
import Auth from "../components/Auth";
import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";

export default function login() {
  const { data } = useMeQuery();
  const router = useRouter();
  if (!data === null) {
    () => {
      router.push("/");
      window.location.reload();
    };
  }
  return (
    <div>
      <Header />
      <Auth />
    </div>
  );
}
