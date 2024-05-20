import { TProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/Mobile-Mania.png";

const AllProduct = async () => {
  const res = await fetch(
    "https://mobile-mania-server-shadman.vercel.app/api/v1/products",
    {}
  );
  const products = await res.json();
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              className="hover:scale-110 transition-transform lg:-ml-6 duration-300"
              src={logo}
              alt="Logo"
              width={180}
              height={180}
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/products" className="text-white text-lg font-semibold">
              <button className="bg-[#21A0F3] transition-transform duration-300 hover:scale-110 hover:bg-black px-4 py-3 rounded-lg">
                All Products
              </button>
            </Link>
            {/* <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            /> */}
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product <span className="text-[#22A1F0]">Dashboard</span>
        </h2>
        <div className="overflow-x-auto border-2 border-[#22A1F0] p-4 bg-white shadow-md rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Serial
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product: TProducts, index: number) => (
                <tr
                  key={product?._id}
                  className="hover:bg-gray-50 transition-all"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image
                      src={product?.image}
                      width={200}
                      height={50}
                      alt="image"
                      className="h-14 w-20 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg">
                    {product?.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium">
                    {product?.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium">
                    ${product?.new_price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-main">
                    {product?.discount}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
