import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import Toggle from "./components/Toggle";
import DarkMode from "./components/Darkmode";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


function App() {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Header/>} />
                    <Route path="/aboutme" element={<AboutMe/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/resume" element ={<Resume/>} />
                    
                </Routes>
            
        </BrowserRouter>
        </>
    );
}

export default App;