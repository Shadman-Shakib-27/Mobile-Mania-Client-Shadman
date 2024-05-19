import Filter from "@/components/ui/Filter";
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async (props: {
  params: { products: string };
  searchParams: any;
}) => {
  const search = props.searchParams;

  const queryUrl = new URLSearchParams(search).toString();
  const res = await fetch(`http://localhost:5000/api/v1/products?${queryUrl}`);
  const products = await res.json();

  return (
    <div className="max-w-[1230px] mx-auto my-12 flex gap-5">
      <div className="h-screen flex-[1] space-y-8 sticky top-60 p-2 left-0">
        <Filter />
      </div>
      <div className="flex-[5]">
        <div className="my-8">
          <h1 className="text-3xl font-semibold my-5 text-center">
            Collection Of Mobile<span className="text-[#22A1F0]"> Mania</span>
          </h1>
          <p className="text-lg w-3/4 text-center mx-auto text-gray-400">
            Welcome to <span className="font-semibold">Mobile Mania</span>, your
            premier destination for all things mobile. Dive into a world where
            cutting-edge technology meets exceptional service.Discover the joy
            of mobile innovation with us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products?.map((product: TProducts) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
