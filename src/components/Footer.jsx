import React from "react";
import "../components/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <small>Copyrights &copy; Bishnu Suyel {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
