import { addCart } from "@/redux/cart/actions";
import Image from "next/image";
import { MdOutlineLocalShipping, MdDeliveryDining } from "react-icons/md";
import { useDispatch } from "react-redux";

interface TProducts {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: TProducts) => {
  const res = await fetch(
    `https://mobile-mania-server-shadman.vercel.app/api/v1/products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="flex flex-col lg:flex-row gap-5">
        <Image
          src={product.image}
          width={400}
          height={500}
          className="rounded-md shadow-md lg:p-0 p-4"
          alt="Product Image"
        />
        <div className="p-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex gap-6 text-2xl mt-3 items-center border-b-2 border-base-300 border-dashed pb-5">
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              <span className="font-semibold">Price:</span> ${product.new_price}
              <sup className="text-[#22A1F0]">
                {" "}
                $<del>{product?.previous_price}</del>
              </sup>
            </p>
            <p className="border-r-2 border-base-300 border-dashed pr-4">
              <span className="font-semibold">Rating:</span> {product.rating}
            </p>
            <p>
              <span className="font-semibold">Brand:</span> {product.category}
            </p>
          </div>
          <p className="my-6 pr-6">{product.description}</p>
          <div>
            <p className="flex gap-2">
              <MdOutlineLocalShipping className="size-6" />
              Delivery Charge Inside Dhaka:
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_inside}
              </span>
            </p>
            <p className="flex gap-2">
              <MdOutlineLocalShipping className="size-6" />
              Delivery Charge Outside Dhaka:
              <span className="text-lg font-semibold">
                ${product.Delivery_cost_outside}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdDeliveryDining className="size-6" />
            <p>
              Delivery Within{" "}
              <span className="text-lg font-semibold">
                {product.Deliver_days}
              </span>{" "}
              Days, <span className="text-sm text-main">Shipping & Return</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
