import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../../types"
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import ReactSelect from 'react-select';
import Card from "../../components/Card";

type MainPageProps = {
  notes: Note[];
  availableTags: Tag[];


}
const MainPage = ({ availableTags, notes }: MainPageProps) => {

  const [title, setTitle] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])


  const filtredNotes = useMemo(
    () =>
      notes.filter((note) => {
        return (
          // Note'un başlığı aranan metni içeriyorsa notu döndür
          (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
          // Seçilen etiketlerin tamamı notta varsa notu döndür
          (selectedTags.length === 0 ||
            selectedTags.every((s_tag) =>
              note.tags.some((noteTag) => noteTag.value === s_tag.value)
            ))
        );
      }),
    [title, selectedTags, notes]
  );

  return (
    <div className="container py-5">
      {/*Ust Kisim */}
      <Stack direction="horizontal" className="justify-content-between ">
        <h1>Notlar</h1>
        <Link to={"/new"}>
          <Button>Oluştur</Button></Link>
      </Stack>
      {/*Filtreleme Kismi */}
      <Form className="mt-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Arat</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} className="shadow"></Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara </Form.Label>
              <ReactSelect // @ts-ignore varolan etiketlerden biri değiştiğinde çalışır
                onChange={(all_tags) => setSelectedTags(all_tags)}
                // daha önce oluşturlan etiketleri listele
                options={availableTags}
                isMulti
                className="text-black" />
            </Form.Group>
          </Col>
        </Row>
      </Form>


      {/*Not Listesi */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col>
            <Card key={note.id} note={note} />
          </Col>

        ))}
      </Row>

    </div>
  )
}

export default MainPage