/* eslint-disable react/no-unescaped-entities */
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";
import Link from "next/link";

const TrendingProducts = ({
  trendingProducts,
}: {
  trendingProducts: TProducts[];
}) => {
  const sortedProducts = trendingProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="my-8 flex justify-between items-center">
        <div className="mx-auto">
          <h1 className="text-3xl text-center font-semibold my-5">
            Trending <span className="text-[#22A1F0]"> Products</span>
          </h1>
          <p className="text-lg  max-w-[50ch] text-center text-gray-400">
            Welcome to <span className="font-semibold">Mobile Mania</span>, your
            premier destination for all things mobile. Dive into a world where
            cutting-edge technology meets exceptional service.Discover the joy
            of mobile innovation with us.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedProducts?.slice(0, 6)?.map((product: TProducts) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link href="/products">
          <button className="btn mt-6 bg-[#22A1F0] hover:bg-black text-white  px-8 btn-active border-main bg-main hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingProducts;
