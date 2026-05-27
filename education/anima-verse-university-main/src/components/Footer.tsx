
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 pattern-grid opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-university-gold" />
              <span className="text-xl font-bold">AnimaVerse University</span>
            </div>
            <p className="text-gray-400">
              Inspiring and empowering students to reach their full potential and make meaningful contributions to society.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-university-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-university-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/#campus-life" className="text-gray-400 hover:text-white transition-colors">Campus Life</Link></li>
              <li><Link to="/#events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Aid</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Campus Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <address className="text-gray-400 not-italic space-y-2">
              <p>123 University Avenue</p>
              <p>Academic City, ST 12345</p>
              <p>United States</p>
              <p className="mt-4">Phone: (123) 456-7890</p>
              <p>Email: info@animaverse.edu</p>
            </address>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AnimaVerse University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
