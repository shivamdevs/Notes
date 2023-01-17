import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";


function Textarea({placeholder = "", onChange = null, defaultValue = ""}) {
    const [note, setNote] = useState(defaultValue);
    useEffect(() => { onChange && onChange(note);}, [note, onChange]);
    const hightlightWithLineNumbers = (input, language) =>highlight(input, language).split("\n").map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`).join("\n");

    return (
        <>
            <Editor
                value={note}
                tabSize={4}
                onValueChange={code => setNote(code)}
                highlight={code => hightlightWithLineNumbers(code, languages.plaintext)}
                placeholder={placeholder}
                padding={10}
                textareaId="codeArea"
                className="editor"
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 18,
                    outline: 0
                }}
            />
        </>
    )
}

export default Textarea;