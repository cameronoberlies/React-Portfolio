import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
//import Toggle from "./components/Toggle";
//import DarkMode from "./components/Darkmode";
import Header from "./pages/Header";
import 'atropos/css';

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/footer";


function App() {
    return (
        <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    
                    
                    <Route path="/" element={<AboutMe/>} index />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/resume" element ={<Resume/>} />
                    
                    
                </Routes>
                <Footer/>
                
            
        </BrowserRouter>
        </>
    );
}

export default App;