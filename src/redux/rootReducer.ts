import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { store } from "./store";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const reducer = combineReducers({
  cart: persistedReducer,
});

export const persistor = persistStore(store);