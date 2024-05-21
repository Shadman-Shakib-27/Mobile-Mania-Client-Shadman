import { TProducts } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isExist = state.products.find(
        (item: TProducts) => item._id === action.payload._id
      );
      if (!isExist) {
        //@ts-ignore
        state.products.push({ ...action.payload, quantity: 1 });
        toast.info("This Item Added Into Your Cart!!");
      } else {
        toast.info("This Item Already Exist To Cart.");
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectedTotalPrice(state);
    },
    updateQuantity: (state, action) => {
      const products = state.products.map((item: TProducts) => {
        if (item._id === action.payload._id) {
          if (action.payload.type === "increment") {
            item.quantity += 1;
          } else if (action.payload.type === "decrement") {
            if (item.quantity <= 1) {
              toast.info("Order Quantity Can't Be Less Than 1.");
            } else {
              item.quantity -= 1;
            }
          }
        }
        return item;
      });
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectedTotalPrice(state);
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item: TProducts) => item._id !== action.payload._id
      );
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectedTotalPrice(state);
    },
  },
});

export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: any, item: TProducts) => {
    return Number(total + item.quantity);
  }, 0);
export const selectedTotalPrice = (state: any) =>
  state.products.reduce((total: any, item: TProducts) => {
    return Number(total + item.quantity * item.new_price);
  }, 0);

export const { addToCard, updateQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
