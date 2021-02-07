import CartList from "components/CartList";
import Header from "components/Header";
import CartFooter from "../components/CartFooter";

export default function cart() {
  return (
    <div>
      <Header />
      <CartList />
      <CartFooter />
    </div>
  );
}
