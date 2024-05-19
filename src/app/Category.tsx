import Image from "next/image";
import Link from "next/link";
import Iphone from "@/assets/images/Iphone.jpg";
import Samsu from "@/assets/images/Samsung.jpg";
import Xiaomi from "@/assets/images/Xiaomi.png";
import Realme from "@/assets/images/Realme.jpg";

const Category = async () => {
  return (
    <div className="max-w-[1230px] px-2 mx-auto my-12">
      <div className="my-8">
        <h1 className="text-3xl font-semibold my-5 text-center">
          Top <span className="text-[#22A1F0]"> Brands</span>
        </h1>
        <p className="text-lg w-2/4 text-center mx-auto text-gray-400">
          Welcome to <span className="font-semibold">Mobile Mania</span>, your
          premier destination for all things mobile. Dive into a world where
          cutting-edge technology meets exceptional service.Discover the joy of
          mobile innovation with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative group">
          <Link href={"/product/iphone"}>
            <Image
              src={Iphone}
              className="rounded hover:scale-95 transition-all h-[550px]"
              height={500}
              width={500}
              alt="Iphone"
            />
            <h2 className="text-Black text-center text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Iphone/Apple
            </h2>
          </Link>
        </div>
        <div className="space-y-5">
          <div className="relative group">
            <Link href={"/product/xiaomi"}>
              <Image
                src={Xiaomi}
                className="rounded hover:scale-95 transition-all h-[265px]"
                height={400}
                width={500}
                alt="Xiaomi"
              />{" "}
              <h2 className="text-Black text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all duration-500 group-hover:bottom-8 group-hover:left-8">
                Xiaomi
              </h2>
            </Link>
          </div>
          <div className="relative group">
            <Link href={"/product/realme"}>
              <Image
                src={Realme}
                className="rounded hover:scale-95 transition-all h-[265px]"
                height={400}
                width={500}
                alt="Realme"
              />{" "}
              <h2 className="text-Black text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
                Realme
              </h2>
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Link href={"/product/samsung"}>
            <Image
              src={Samsu}
              className="rounded hover:scale-95 transition-all h-[550px]"
              height={700}
              width={500}
              alt="Samsung"
            />{" "}
            <h2 className="text-Black text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Samsung
            </h2>
          </Link>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link href="/category">
          <button className="btn px-8 btn-active border-main bg-[#22A1F0] hover:bg-black text-white hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
