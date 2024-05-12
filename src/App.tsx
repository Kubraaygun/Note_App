import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import EditPage from './pages/EditPage'
import { useLocalStorage } from '@uidotdev/usehooks'
import {Note, NoteData, Tag} from "./types"
import { v4 } from 'uuid';

const App = () => {
const [notes,setNotes]=useLocalStorage<Note>("notes",[])
const [tags,setTags]=useLocalStorage<Tag>("tags",[])

//Yeni etiket olustur

const createTag=(tag:Tag):void=>{
  setTags((prev)=>[...prev,tag])
}
//yeni not olusturma > id'sini ekle
const createNote=(noteData:NoteData):void=>{
//objeye id ozelligi ekle
const newNote={
  id:v4(),
  ...noteData,
}
//state'e yeni not ekle
setNotes((prev)=>[...prev, newNote])
}

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/new' element={<CreatePage handleSubmit={createNote} createTag={createTag} availabelTags={tags}/>} />
        <Route path='/:id'>
          <Route
            index //id route'dayken bu route devreye girsin
            element={<DetailPage/>} />

          <Route
            path='edit' 
            element={<EditPage/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App