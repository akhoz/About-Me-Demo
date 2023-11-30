import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import MainCarousel from './components/MainCarousel';
import MainFooter from './components/MainFooter';

import Skills from './pages/Skills';
import LifeAsAStudent from './pages/LifeAsAStudent';
import Passions from './pages/Passions';
import Aspirations from './pages/Aspirations';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/life-as-a-student" element={<LifeAsAStudent />} />
                    <Route path="/passions" element={<Passions />} />
                    <Route path="/aspirations" element={<Aspirations />} />
                </Routes>
                <MainCarousel />
                <MainFooter />
            </>
        </Router>
    );
}

export default App;
