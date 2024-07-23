import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataTable: [
    {
      id: 122,
      name: "coba nama",
      email: "email@mail.com",
    },
    {
      id: 212,
      name: "coba nama 1",
      email: "email@mail.com",
    },
    {
      id: 331,
      name: "coba nama 2",
      email: "email@mail.com",
    },
  ],
};

const table = createSlice({
  name: "table",
  initialState,
  reducers: {
    deleteData: (state, action) => {
      state.dataTable.pop(action.payload);
    },
    addData: (state, action)=>{
      state.dataTable = [...state.dataTable, ...action.payload]
    }
  },
});
export const { deleteData, addData } = table.actions;
export default table.reducer;
