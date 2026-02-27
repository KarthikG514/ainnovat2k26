
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EventDetails from './pages/EventDetails';
import Registration from './pages/Registration';
import VideoBackground from './components/VideoBackground';
import Achievements from './pages/Achievements';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <VideoBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
            <Route path="/register/:eventId" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;