import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import MainCarousel from './components/MainCarousel';
import MainFooter from './components/MainFooter';

import Skills from './pages/Skills';
import LifeAsAStudent from './pages/LifeAsAStudent';
import Passions from './pages/Passions';
import Aspirations from './pages/Aspirations';

import { FaGithub } from "react-icons/fa";
function App() {
    return (
        <Router>
            <div className="">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/life-as-a-student" element={<LifeAsAStudent />} />
                    <Route path="/passions" element={<Passions />} />
                    <Route path="/aspirations" element={<Aspirations />} />
                </Routes>
                <MainCarousel />
                <div className="my-20 text-center">
                    <div className="flex items-center justify-center">
                        <p className="text-xl font-bold">
                            If you want to check my projects, take a look at my{" "}
                            <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                                GitHub profile
                            </a>
                            .
                        </p>
                        <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer" className="ml-2">
                            <FaGithub className="text-3xl animate-pulse" />
                        </a>
                    </div>
                </div>
                <MainFooter />
            </div>
        </Router>
    );
}

export default App;
