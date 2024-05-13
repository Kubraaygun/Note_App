import { useOutletContext } from 'react-router-dom'
import  Form  from '../../components/Form'
import { Note } from '../../types'

const EditPage = () => {

  const found:Note=useOutletContext()
  return (
    <div>
       <Form/>
    </div>
  )
}

export default EditPage