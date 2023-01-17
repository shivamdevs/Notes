import { setTitle } from "../app.functions";
import FooterNote from "../components/FooterNote";


function NoteLayout({title, children}) {
    setTitle(...title);

    return (
        <div className="layout">
            <main className="viewboard">
                {children}
            </main>
            <FooterNote />
        </div>
    )
}

export default NoteLayout;