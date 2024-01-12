import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home"
import Projects from "./pages/Projects";
import About from "./pages/About";
import Page_abilities from "./pages/Abilities";
import Page_certificates from "./pages/Page_certificates";


export default function RoutedPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/abilities" element={ <Page_abilities /> } />
                <Route path="/certificates" element={ <Page_certificates /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}