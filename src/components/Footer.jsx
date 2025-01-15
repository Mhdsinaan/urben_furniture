import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="mb-4">
        <p>Contact Us: Sinanmhd154@gmail.com</p>
        <p>Phone: +91 9072276965</p>
      </div>
      <div className="mb-4">
        <p>&copy; 2025 azaakki. All Rights Reserved.</p>
      </div>
      <div className="text-gray-400">
        <p>Follow us on:</p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-white"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-white"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-white"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
