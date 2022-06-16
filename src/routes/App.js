import "../sass/App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";


function App() {
    return(
        <main className="main">
            <section>
                <Header />
                <Outlet />
            </section>
            <Footer />
        </main>
    ) 
}

export default App;
