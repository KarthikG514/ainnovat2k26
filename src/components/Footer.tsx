import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">AINNOVAT 2K26</h3>
            <p className="text-gray-400 mb-4">
              Join us for an immersive experience of innovation, learning, and networking at the Annual Technical Symposium.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mec_ai.ds_official?igsh=MWY0YXlhMDNia3E2eA==" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mec-ai-ds-661832397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="/#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Events</h4>
            <ul className="space-y-4">
              <li className="h-6 flex items-center">
                <Link to="/event/paper-presentation" className="text-gray-400 hover:text-white transition-colors">Idea Pitching</Link>
              </li>
              <li className="h-6 flex items-center">
                <Link to="/event/idea-pitching" className="text-gray-400 hover:text-white transition-colors">Brain Buster</Link>
              </li>
              <li className="h-6 flex items-center">
                <Link to="/event/project-expo" className="text-gray-400 hover:text-white transition-colors">Tech Forge</Link>
              </li>
              <li className="h-6 flex items-center">
                <Link to="/event/workshop" className="text-gray-400 hover:text-white transition-colors">Workshop</Link>
              </li>
              <li className="h-6 flex items-center">
                <Link to="/event/true-detective" className="text-gray-400 hover:text-white transition-colors">Fun Factory</Link>
              </li>
              <li className="h-6 flex items-center">
                <Link to="/event/ipl-auction" className="text-gray-400 hover:text-white transition-colors">BEAT BATTLE: Mind Edition</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">9487078661</span>
              </li>
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">6381503021</span>
              </li>
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">8220696177</span>
              </li>
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">6381254305</span>
              </li>
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">9003868879</span>
              </li>
              <li className="flex items-center gap-3 h-6">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-gray-400">6383035750</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AINNOVAT 2K26. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;