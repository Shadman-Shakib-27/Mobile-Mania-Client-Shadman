"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const brands = ["Iphone", "Samsung", "Xiaomi", "Realme"];

const Filter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams ?? "");

  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const addBrands = (brand: string) => {
    setSelectedBrand((prev) => (prev = brand));
    if (brand && brand !== selectedBrand) {
      params.set("category", brand);
    } else if (brand && brand === selectedBrand) {
      setSelectedBrand((prev) => (prev = ""));
      params.delete("category");
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-full border border-[#21A0F3] bg-base-200 hover:shadow-xl transition-all ease-in-out rounded-md p-3 space-y-10 sticky md:transform md:transition-none">
      <div className="space-y-2">
        <h5 className="text-lg font-medium text-slate-700">
          Top <span className="text-[#21A0F3]">Brands</span>
        </h5>

        {brands.map((brand) => (
          <div
            className="cursor-pointer hover:text-main transition-all transform hover:px-2 ease-in-out"
            key={brand}
          >
            <input
              type="checkbox"
              className="m-0 p-0"
              checked={selectedBrand === brand}
              onChange={() => addBrands(brand)}
            />
            <span className="px-1">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
