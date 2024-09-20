import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-4 w-full fixed bottom-0 w-full z-10 shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()}Karmaa Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
