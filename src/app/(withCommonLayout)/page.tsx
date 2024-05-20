import FlashSale from "@/pages/Home/flashSale/FlashSale";
import Hero from "@/pages/Home/hero/Hero";
import Category from "../Category";
import TrendingProducts from "../TrendingProducts";

const page = async () => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {
      cache: "no-store",
      // next: {
      //   revalidate: 30,
      // },
    }
  );
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
