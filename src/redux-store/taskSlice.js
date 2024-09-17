import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
  };

  const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        getTaskList: (state, action) => {
            return state.date;
        },
        addNewTask: (state, action) => {
            state.data = [...state.data, action.payload];
            return state;
        }
    },
  });

  export const { getTaskList,addNewTask } = taskSlice.actions;
  export default taskSlice.reducer;