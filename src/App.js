import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid'
import NoteList from "./components/NoteList";
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes,setNotes] = useState([

  ]);
  const addNote = (text) => {
   const date = new Date();
   const newNote = {
     id : nanoid(),
     text : text,
     date : date.toLocaleDateString(),
   }
   const newNotes =  [...notes,newNote];
setNotes(newNotes);
  }
  const deleteNote = (id) => {
   const newNotes =  notes.filter((note)=>note.id !== id);
  setNotes(newNotes);
  }
 const [searchText,setSearchText] = useState('');
 const [darkMode,setDarkMode] = useState(false);

 useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes){
    setNotes(savedNotes)
  }
  },[])

useEffect(()=>{
localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])


 return (
   <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggle={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
    <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleDeleteNote= {deleteNote} handleAddNote = {addNote}/>
    </div>
    </div>
  );
}

export default App;
