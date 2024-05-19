import FlashSale from "@/pages/Home/flashSale/FlashSale";
import Hero from "@/pages/Home/hero/Hero";
import Category from "../Category";
import TrendingProducts from "../TrendingProducts";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <Hero />
      <FlashSale flashSales={products} />
      <Category />
      <TrendingProducts trendingProducts={products} />
    </div>
  );
};

export default page;
