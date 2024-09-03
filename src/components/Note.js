import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/noteSlice";

const Note = ({ id, text, date }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeNote(id));
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          size="1.3em"
          color="red"
          cursor="pointer"
          onClick={() => {handleDelete()}}
        />
      </div>
    </div>
  );
};

export default Note;
