import { TProducts } from "@/types";
import { ADD_TO_CART, DELETE_ITEM, REMOVE_FROM_CART } from "./actionType";

export const addCart = (product: TProducts) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCart = (product: TProducts) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const deleteCart = (product: TProducts) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};
