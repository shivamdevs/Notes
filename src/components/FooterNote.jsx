import { Link } from "react-router-dom";
import app from "../app.data";


function FooterNote() {
    return (
        <footer className="footer stickyfooter">
            <div className="footerflex">
                <div className="footersplit">
                    <div className="footerlabel">© 2023 <a href={app.pathname} target="_blank" rel="noopener noreferrer">{app.parent} (https:{app.pathname})</a>.</div>
                    <div className="footerlabel">Note made using <Link to="/">{app.name} - {app.description}</Link></div>
                </div>
                <div className="footersplit">
                    <div className="footerlabel"><a href={app.pathname + "/legal"} target="_blank" rel="noopener noreferrer">Privacy Policy</a></div>
                    <div className="footerlabel"><a href={app.pathname + "/legal/terms"} target="_blank" rel="noopener noreferrer">Terms of Services</a></div>
                </div>
            </div>
        </footer>
    )
}

export default FooterNote;