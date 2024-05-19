import Image from "next/image";
import Link from "next/link";
import Error from "../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col mt-[12%] space-y-4 justify-center items-center">
      <Image src={Error} alt="404" height={500} width={500} />
      <h1 className=" text-2xl font-bold">Page Not Found</h1>
      <Link href={"/"} className="text-main underline">
        <button className="bg-[#21A0F3] hover:scale-110 transition-transform duration-300 hover:bg-black text-white px-4 py-3 rounded-lg">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
