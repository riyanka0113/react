import React, { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <h1>Notes</h1>
        <button className="save" onClick={() => setDarkMode((pre) => !pre)}>
          Toggle Mode
        </button>
      </div>
      <Search />
      <NotesList />
    </div>
  );
};

export default App;
