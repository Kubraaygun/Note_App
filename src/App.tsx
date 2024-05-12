
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>ANASAYFA</h1>} />
        <Route path='/new' element={<h1>Yeni Oluşturma</h1>} />
        <Route path='/:id'>
          <Route
            index //id route'dayken bu route devreye girsin
            element={<h1>Detay Sayfası</h1>} />

          <Route
            path='edit' 
            element={<h1>Düzenleme Sayfası</h1>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App