import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    items: [],
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    add(state,action){
        state.items.push(action.payload)
    }
  }

})

export default cartSlice.reducer;
export const{add}  = cartSlice.actions