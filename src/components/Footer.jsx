import app from "../app.data";


function Footer() {
    return (
        <footer className="footer">
            <div className="maxwidth">
                <div className="footerflex">
                    <div className="footersplit">
                        <div className="footerlabel">© 2023 <a href={app.pathname} target="_blank" rel="noopener noreferrer">{app.parent} (https:{app.pathname})</a></div>
                        <div className="footerlabel"><a href={app.pathname + "/legal"} target="_blank" rel="noopener noreferrer">Privacy Policy</a></div>
                        <div className="footerlabel"><a href={app.pathname + "/legal/terms"} target="_blank" rel="noopener noreferrer">Terms of Services</a></div>
                    </div>
                    <div className="footersplit">
                        <div className="footerlabel">Version: {app.version}</div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;