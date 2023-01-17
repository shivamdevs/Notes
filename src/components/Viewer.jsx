

function Viewer({content = ""}) {
    return (
        <pre className="viewcard" style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 18,
            outline: 0
        }}>
            {content && content.split("\n").map((line, index) => {
                return (
                    <div key={index} className="viewline">
                        <span className="viewindex">{index + 1}</span>
                        <span className="viewcontent">{line || " "}</span>
                    </div>
                );
            })}
        </pre>
    )
}

export default Viewer;