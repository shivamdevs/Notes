import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Viewer from "../components/Viewer";
import { getNote } from "../firebase";
import NoteLayout from "../Layouts/NoteLayout";


function Note() {
    const noteid = useParams().noteid;
    const [note, setNote] = useState("");
    const [noteErr, setNoteErr] = useState("");

    const getData = useCallback(async () => {
        try {
            const notedata = await getNote(noteid);
            setNote(notedata);
        } catch (error) {
            setNoteErr(String(error));
        }
    }, [noteid]);
    useEffect(() => { getData(); }, [getData]);

    return (
        <NoteLayout title={[noteid, "View Note"]}>
            {note && <Viewer content={note} />}
            {!note && <div className="viewload ">Loading note contents...</div>}
            {noteErr && <div className="viewload error">An Error occured.<br />Either this note was deleted or it didn't existed in the irst place.<br />{noteErr}</div>}
        </NoteLayout>
    );
}

export default Note;