"use client";

import { useDispatch } from "react-redux";
import { addToCard } from "@/redux/features/cartSlice";
import { TProducts } from "@/types";

const AddToCartButton = ({ product }: { product: TProducts }) => {
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(addToCard(product));
  };

  return (
    <button
      onClick={handleAddToCard}
      className="px-4 bg-[#22A1F0] hover:bg-black text-white py-[6px] bg-main border hover:bg-pure hover:text-main hover:border-main transition-all duration-500 delay-100 rounded"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
