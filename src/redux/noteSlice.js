import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Math.random(),
    text: "This is my first note",
    date: "15/04/2022",
  },
  {
    id: Math.random(),
    text: "This is my second note",
    date: "15/04/2022",
  },
  {
    id: Math.random(),
    text: "This is my third note",
    date: "15/04/2022",
  },
];

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Math.random(),
        text: action.payload,
        date: new Date().toLocaleDateString(),
      };
      state.push(newNote);
    },
    filterNotes: (state, action) => {
      if(action.payload === ''){
        return initialState;
      }
      return state.filter((note) =>
        note.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    removeNote: (state, action) => {
      console.log(action.payload, "id");
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote, filterNotes } = noteSlice.actions;

export default noteSlice.reducer;
