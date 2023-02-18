import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Note from "./pages/Note";

function App() {
  const [noteData, setNoteData] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteData));
  }, [noteData]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note noteData={noteData} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNoteData={setNoteData} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote noteData={noteData} setNoteData={setNoteData} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
