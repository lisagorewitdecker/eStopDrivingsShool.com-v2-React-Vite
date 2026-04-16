import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Blog from './pages/Blog';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout /> }>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="schedule" element={<Schedule />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default App;