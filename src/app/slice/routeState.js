import { createSlice } from '@reduxjs/toolkit';

const routeStateSlice = createSlice({
  name: 'routeState',
  initialState: {
    route: 'Home',
  },
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    }
  }
})

export const { setRoute } = routeStateSlice.actions
export default routeStateSlice.reducer