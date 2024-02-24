import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import apiSlice from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
