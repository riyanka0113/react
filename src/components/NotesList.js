import React from "react";
import { useSelector } from "react-redux";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList;
