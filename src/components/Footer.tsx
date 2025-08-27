import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0B0C10] to-[#1a1a2e] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                 Allala Store
              </span>
            </Link>
            <p className="text-[#9CA3AF] mb-6 max-w-md">
              Your ultimate destination for the latest games, gaming gear, and everything you need to level up your gaming experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#3B82F6] transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-[#9CA3AF] group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#9CA3AF] hover:text-white hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#3B82F6] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-[#9CA3AF]">
             
              
              <p>Phone: +216 12 345 678</p>
              <p>Email: info@AllalaStore.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-[#9CA3AF]">
            © 2025 Allala Store. All rights reserved. Built with passion for gamers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;