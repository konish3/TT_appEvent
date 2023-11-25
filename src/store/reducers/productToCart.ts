import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../models/ICard";

type typeState = {
  cards: ICard[];
  count: number;
};

const initialState: typeState = {
  cards: [],
  count: 0,
};

export const productToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addProduct } = productToCartSlice.actions;
export default productToCartSlice.reducer;
