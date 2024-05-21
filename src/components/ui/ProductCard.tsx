"use client";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { TProducts } from "@/types";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useDispatch } from "react-redux";
import { addToCard } from "@/redux/features/cartSlice";

const ProductCard = ({ product }: { product: TProducts }) => {
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "hsla(32, 100%, 50%, 1)",
    inactiveFillColor: "#888",
  };

  const handleAddToCard = (product: TProducts) => {
    dispatch(addToCard(product));
  };

  return (
    <div className="card hover:scale-105 transition-all duration-300 bg-base-100 shadow-xl relative">
      <figure>
        <Image
          src={product?.image}
          width={300}
          height={200}
          alt="Phones"
          className="h-52 rounded-t-xl"
        />
        {product?.discount && (
          <div className="p-4 badge badge-neutral bg-[#22A1F0] absolute top-3 right-3">
            <h6 className="font-semibold text-black">-{product?.discount}%</h6>
          </div>
        )}
      </figure>
      <div className="card-body pb-4 space-y-[2px]">
        <h2 className="card-title">{product?.title}</h2>

        <div>
          <p className="text-lg">
            Price: ${product?.new_price}
            <sup className="text-[#22A1F0]">
              {" "}
              $<del> {product?.previous_price}</del>
            </sup>
          </p>
        </div>
        <Link href={`/products/${product?._id}`}>
          <p className="text-gray-500">
            {product.description.length > 100
              ? product.description.slice(0, 60) + "..."
              : product.description}
            <Link href={`/products/${product._id}`} className="text-[#22A1F0]">
              Read More
            </Link>
          </p>
        </Link>
        <div className="flex items-center gap-1">
          <Rating
            style={{ maxWidth: 140 }}
            itemStyles={myStyles}
            value={product?.rating}
            readOnly
          />
          <span>({randomNumber})</span>
        </div>

        <button
          onClick={() => {
            handleAddToCard(product);
          }}
          className="px-4 bg-[#22A1F0] hover:bg-black text-white  py-[6px] bg-main border hover:bg-pure hover:text-main hover:border-main transition-all duration-500 delay-100 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
