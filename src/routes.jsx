import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Page_home from "./pages/Page_home"
import Page_certificates from "./pages/Page_certificates";
import Page_abilities from "./pages/Page_abilities"
import Page_projects from "./pages/Page_projects"
import Page_about from "./pages/Page_about";


export default function RoutedPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Page_home/> } />
                <Route path="/certificates" element={ <Page_certificates/> } />
                <Route path="/abilities" element={ <Page_abilities/> } />
                <Route path="/projects" element={ <Page_projects/> } />
                <Route path="/about" element={ <Page_about/> } />

                <Route path="/*" element={ <Navigate to="/"/> } /> {/* NOT FOUND */}
            </Routes>
        </BrowserRouter>
    )
}