import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Geektime.io. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
          <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;