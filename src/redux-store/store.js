import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice'

const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  
});

export default store;