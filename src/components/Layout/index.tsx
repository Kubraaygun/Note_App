import { Navigate, Outlet, useParams } from "react-router-dom"
import {Note} from "../../types"


interface LayoutProps {
    notes:Note[]
}

const Layout = ({notes}:LayoutProps) => {

    //urlden id'yi al
    const {id}=useParams()
    // urlden alinan id ile eslesen note'u bul
    const found=notes.find((n)=>n.id==id)
    //note bulunamadiysa kullaniciyi anasayfaya yonlendir
    if(!found) return <Navigate to={"/"} replace/>
    console.log(found)

    //alt route'u ekrana bas bulunan note-u alt route'a gonder
 return <Outlet context={found} />
 
  
}

export default Layout