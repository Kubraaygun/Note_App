import { Badge, Card, Stack } from "react-bootstrap";
import { Note } from "../../types"

type CardType = {
    note: Note;
}

const NoteCard = ({ note }: CardType) => {
    return (
        <Card>
            <Card.Body>
                <Stack gap={2} className="align-items-center justify-content-between h-100">
                    <span className="fw-bold">{note.title}</span>
               

                <Stack direction="horizontal" className="justify-content-center" gap={2}>
                    {note.tags.map((tag) => (
                        <Badge> {tag.label}</Badge>
                    ))}

                </Stack>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default NoteCard