import { configureStore } from '@reduxjs/toolkit';
import dataExtracitonReducer from './slice/dataExtraction';
import rootDataReducer from './slice/rootData';
import routeStateReducer from './slice/routeState';

export default configureStore({
  reducer: {
    dataExtraction: dataExtracitonReducer,
    rootData: rootDataReducer,
    routeState: routeStateReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})