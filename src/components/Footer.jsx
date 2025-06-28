import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-100 p-8 text-base-content dark:bg-base-300">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Vitalie Lozan
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
