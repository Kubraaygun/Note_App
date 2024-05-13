import Form from "../../components/Form"
import { NoteData, Tag } from "../../types";

export type CreatePageProps = {
  handleSubmit: (noteData: NoteData) => void;
  createTag: (tag: Tag
  ) => void;
  availableTags: Tag[];
}

const CreatePage = (
  {
    availableTags,
    handleSubmit,
    createTag,
  }
) => {
  return (
    <div className="container py-5">
        <h2>Yeni Not Oluştur</h2>
        <Form handleSubmit={handleSubmit} createTag={createTag} availableTags={availableTags}/>
    </div>
  )
}

export default CreatePage