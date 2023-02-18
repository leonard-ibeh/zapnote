import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import React, { useEffect, useState } from "react";

const Note = ({ noteData }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(noteData);

  const handleSearch = () => {
    setFilteredNotes(
      noteData.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
        }
        return note;
      })
    );
  };
  useEffect(handleSearch, [text, noteData]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button className="btn" onClick={() => setShowSearch((prev) => !prev)}>
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Note;
