import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import EditPage from './pages/EditPage'
import { useLocalStorage } from '@uidotdev/usehooks'
import { Note, NoteData, Tag } from "./types"
import { v4 } from 'uuid';
import Layout from './components/Layout/index';


const App = () => {
  const [notes, setNotes] = useLocalStorage<Note>("notes", [])
  const [tags, setTags] = useLocalStorage<Tag>("tags", [])

  //Yeni etiket olustur

  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag])
  }
  //yeni not olusturma > id'sini ekle
  const createNote = (noteData: NoteData): void => {
    //objeye id ozelligi ekle
    const newNote = {
      id: v4(),
      ...noteData,
    }
    //state'e yeni not ekle
    setNotes((prev) => [...prev, newNote])
  }

  //note'u sil 
  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id))
  }

  //note'u guncelleme
  const updateNote = (id: string, updatedData: NoteData) => {
    //guncellenecek note'un state'de tuttugumuz halini bulucaz
    //onu kaldirip yerine guncel halini koyucaz
    const updated=notes.map((note) =>
      note.id == id ? {
        id,
        ...updatedData,
      } : note);

    //state'i guncelle
    setNotes(updated)
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage notes={notes} availableTags={tags} />} />
        <Route path='/new' element={<CreatePage handleSubmit={createNote} createTag={createTag} availabelTags={tags} />} />

        <Route path='/:id' element={<Layout notes={notes} />}>
          <Route
            index //id route'dayken bu route devreye girsin
            element={<DetailPage deleteNote={deleteNote} />} />

          <Route
            path='edit'
            element={<EditPage availableTags={tags} createTag={createTag} onSubmit={updateNote}
            />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App