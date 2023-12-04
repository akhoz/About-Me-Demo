import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import MainCarousel from './components/MainCarousel';
import MainFooter from './components/MainFooter';

import Skills from './pages/Skills';
import Passions from './pages/Passions';
import Aspirations from './pages/Aspirations';
import Contact from "./pages/Contact.jsx";
import Extra from "./pages/Extra.jsx";

function App() {
    return (
        <Router>
            <div className="">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/passions" element={<Passions />} />
                    <Route path="/aspirations" element={<Aspirations />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/extra" element={<Extra />} />
                </Routes>
                <MainCarousel />
                <MainFooter />
            </div>
        </Router>
    );
}

export default App;
