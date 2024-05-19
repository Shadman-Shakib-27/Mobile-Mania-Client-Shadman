export type TProducts = {
  id?: string;
  _id: string;
  title: string;
  category: string;
  description: string;
  previous_price?: number;
  new_price: number;
  rating: number;
  quantity: number;
  available: number;
  discount?: number;
  image: string;
  Deliver_days: number;
  Delivery_cost_inside: number;
  Delivery_cost_outside: number;
};
