// src/components/layout/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Bigbirdfarm</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Bigbirdfarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;