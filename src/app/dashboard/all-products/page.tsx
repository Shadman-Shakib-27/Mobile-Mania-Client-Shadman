import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async () => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();
  const sortedProducts = products.sort(
    (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
  );
  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="my-8">
        <h1 className="lg:text-3xl text-2xl font-semibold my-5 text-center">
          Total Collection Of Mobile
          <span className="text-[#22A1F0]"> Mania</span>
        </h1>
        <p className="text-lg w-3/4 text-center mx-auto text-gray-400">
          Welcome to <span className="font-semibold">Mobile Mania</span>, your
          premier destination for all things mobile. Dive into a world where
          cutting-edge technology meets exceptional service.Discover the joy of
          mobile innovation with us.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:px-2 xs:px-2">
        {sortedProducts?.map((product: TProducts) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
