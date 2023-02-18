import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditNote = ({ noteData, setNoteData }) => {
  const date = useCreateDate();
  const navigate = useNavigate();

  const { id } = useParams();
  const note = noteData.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = noteData.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNoteData(newNotes);
      navigate("/");
    } else {
      alert("input note");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newNotes = noteData.filter((item) => item.id !== id);
      setNoteData(newNotes);
    }
    navigate("/");
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>

        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
