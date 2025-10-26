import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Notes from "./components/Notes.jsx";
import notes from "./Notes.js";

export default function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Notes key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </>
  );
}
