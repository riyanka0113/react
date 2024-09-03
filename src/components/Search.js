import React from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { filterNotes } from "../redux/noteSlice";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <MdSearch size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => {dispatch(filterNotes(e.target.value))}}
      />
    </div>
  );
};

export default Search;
