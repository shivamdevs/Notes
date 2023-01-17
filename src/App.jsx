import { Route, Routes } from "react-router-dom";
import { setTitle } from "./app.functions";
import Index from "./pages/Index";
import Note from "./pages/Note";

import './styles/layout.css';
import './styles/components.css';

function App() {
    setTitle("Loading...");

    return (
        <Routes>
            <Route path="/:noteid" element={<Note />} />
            <Route exact path="/" element={<Index />}/>
        </Routes>
    );
};

export default App;