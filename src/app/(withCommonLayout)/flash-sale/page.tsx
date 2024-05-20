import CountDownPage from "@/components/shared/countDown/CountDown";
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async () => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();

  return (
    <div className="max-w-[1230px] mx-auto mb-16">
      <div className="my-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold my-5">
            Trending{" "}
            <span className="text-main">
              {" "}
              <span className="text-[#22A1F0]">Products</span>
            </span>
          </h1>

          <p className="text-lg text-gray-400 w-2/3">
            Welcome to <span className="font-semibold">Mobile Mania</span>, your
            premier destination for all things mobile. Dive into a world where
            cutting-edge technology meets exceptional service.Discover the joy
            of mobile innovation with us.
          </p>
        </div>
        <CountDownPage />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product: TProducts) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
