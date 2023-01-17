import { setTitle } from "../app.functions";
import Footer from "../components/Footer";
import Header from "../components/Header";


function DefaultLayout({title, children}) {
    setTitle(...title);

    return (
        <div className="layout">
            <Header />
            <div className="maxwidth">
                <main className="container">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;