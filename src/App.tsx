import { Zap, Phone, Mail, MapPin, Clock, Shield, Award, Users, CheckCircle, Star } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-slate-900">Odyssey Electrical</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-amber-500 transition-colors duration-200 font-medium">Services</a>
              <a href="#about" className="text-slate-600 hover:text-amber-500 transition-colors duration-200 font-medium">About</a>
              <a href="#gallery" className="text-slate-600 hover:text-amber-500 transition-colors duration-200 font-medium">Gallery</a>
              <a href="#testimonials" className="text-slate-600 hover:text-amber-500 transition-colors duration-200 font-medium">Testimonials</a>
              <a href="#contact" className="bg-amber-500 text-white px-6 py-2.5 rounded-lg hover:bg-amber-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
