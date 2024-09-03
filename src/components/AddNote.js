import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/noteSlice";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (noteText.trim().length > 0) {
      dispatch(addNote(noteText));
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a new note..."
        value={noteText}
        onChange={(e) => {
          if (200 - noteText.length > 0) setNoteText(e.target.value);
        }}
      ></textarea>
      <div className="note-footer">
        <small>{200 - noteText.length} Remaining</small>
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
