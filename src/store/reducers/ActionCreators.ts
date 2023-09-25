import { createAsyncThunk } from '@reduxjs/toolkit';


// export const fetchCard = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(cardSlice.cards)
//     const response = await fetch('https://appevent.ru/dev/task1/catalog')
//     const result = await response.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const addProductToCart = () => {

// }

export const fetchCards = createAsyncThunk(
  'card/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://appevent.ru/dev/task1/catalog')
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Не удалось загрузить товары')
      }
      const result = await response.json()
      if (result.status === 422) {
        return thunkAPI.rejectWithValue('Email неккоректный')
      }
      return result.items
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить товары')
    }
    
  }
);