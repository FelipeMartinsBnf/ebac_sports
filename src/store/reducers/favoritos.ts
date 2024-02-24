import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosSlice = {
  itens: Produto[]
}

const initialState: FavoritosSlice = {
  itens: []
}

const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens = [...state.itens, produto]
      }
    }
  }
})

export const { addFavoritos } = FavoritosSlice.actions
export default FavoritosSlice.reducer
