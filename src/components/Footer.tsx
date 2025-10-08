import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Odyssey Electrical</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted partner for professional electrical services. Licensed, insured, and committed to excellence since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Gallery</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Residential</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Commercial</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Emergency</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Lighting</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Maintenance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Odyssey Electrical. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
