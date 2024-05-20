import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";

const page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );
  let filteredProducts: TProducts[] = [];
  const products = await res.json();

  if (products !== undefined) {
    const sorted = products.filter(
      (product: TProducts) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
    filteredProducts = sorted;
  }
  // console.log(filteredProducts);

  return (
    <div className="max-w-[1230px] mx-auto my-12 ">
      <div className="my-8">
        <h1 className="text-3xl font-semibold my-5 text-center">
          All Product From
          <span className="text-[#22A1F0] capitalize"> {category}</span> Brands
        </h1>
        <p className="text-lg w-3/4 text-center mx-auto text-gray-400">
          Welcome to <span className="font-semibold">Mobile Mania</span>, your
          premier destination for all things mobile. Dive into a world where
          cutting-edge technology meets exceptional service.Discover the joy of
          mobile innovation with us.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {filteredProducts?.map((product: TProducts) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
