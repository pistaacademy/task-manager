import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {
            id: 1,
            title: "Task 1",
            description: "This is Task 1",
            status: "Open",
        },
        {
            id: 2,
            title: "Task 2",
            description: "This is Task 2",
            status: "Open",
        },
    ],
  };

  const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        getTaskList: (state, action) => {
            return state.date;
        },
    },
  });

  export const { getTaskList } = taskSlice.actions;
  export default taskSlice.reducer;