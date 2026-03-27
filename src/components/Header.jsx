import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header glass">
      <h1 className="header-title">الشيخ محمد أحمد حسن</h1>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
