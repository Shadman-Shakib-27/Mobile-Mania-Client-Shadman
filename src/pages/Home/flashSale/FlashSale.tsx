"use client";
import ProductCard from "@/components/ui/ProductCard";
import { TProducts } from "@/types";
import Link from "next/link";

const FlashSale = ({ flashSales }: { flashSales: TProducts[] }) => {
  return (
    <div className="max-w-[1230px] mx-auto my-16 lg:mt-[173px] sm:mt-[168px] xs:mt-[168px]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl mx-auto font-semibold">
          Flash <span className="text-[#22A1F0]">Sale</span>
        </h1>
      </div>
      <p className="max-w-[50ch] xs:px-2 sm:px-2 text-center text-[18px] mx-auto my-4 text-gray-400">
        Hurray!!! Flash Sale is going on, grab your exciting offer during this
        sale time.Never miss this exciting offer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6 sm:p-2 xs:p-2">
        {flashSales?.slice(4, 8)?.map((sale: TProducts) => (
          <ProductCard key={sale?._id} product={sale} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/flash-sale">
          <button className="btn px-8 btn-active text-white border-main bg-[#22A1F0] hover:bg-black hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
