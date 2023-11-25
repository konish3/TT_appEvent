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
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    // [addProduct.fulfilled.type]: (state, action: PayloadAction<ICard[]>) => {
    //   state.cards = action.payload
    // },
    // [fetchCards.pending.type]: (state) => {
    // },
    // [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
    // },
  },
});

export const { addProduct, removeProduct } = productToCartSlice.actions;
export default productToCartSlice.reducer;
