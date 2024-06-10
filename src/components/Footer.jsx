import React from 'react';
import "../components/css/footer.css";


const Footer = () => {
  return (
    <footer className="fixed-bottom mt-3 mb-3 d-flex justify-content-center bg-light">
      <small>Copyrights &copy; Bishnu Suyel {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;