import LatestProducts from "./LatestProducts";
import ShopCategory from "./ShopCategory";
import data from "products.json";
import Image from "next/image";
import ShopShowCase from "./ShopShowCase";

export default function ShopMain() {
  const { products } = data;
  return (
    <section className="grid-container pt-20 pb-10">
      <LatestProducts />
      <main className="col-start-2 col-end-3">
        <ShopShowCase products={products} />
      </main>
    </section>
  );
}
