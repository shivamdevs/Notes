import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app from "../app.data";
import Textarea from "../components/Textarea";
import { addNote } from "../firebase";
import DefaultLayout from "../Layouts/DefaultLayout";

function Index() {
    const [note, setNote] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    async function sendNote() {
        setDisabled(true);
        try {
            const key = await addNote(note);
            navigate("/" + key);
        } catch (error) {
            setDisabled(false);
            toast.error(String(error));
        }
    }
    return (
        <DefaultLayout title={["Create Note"]}>
            <h1>{app.name} - {app.description}</h1>
            <Textarea
                placeholder="Enter your note contents here..."
                onChange={setNote}
            />
            <div className="buttonflex">
                <button type="submit" onClick={sendNote} disabled={disabled || !note}>
                    {disabled && "Creating..."}
                    {!disabled && "Create Note"}
                </button>
            </div>
        </DefaultLayout>
    )
}

export default Index;