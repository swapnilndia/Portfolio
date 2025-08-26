'use client';

import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import useMobileMenu from '../../hooks/useMobileMenu';

const Header = ({ className = '', fixed = true, transparent = false }) => {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <header
      className={`header ${className} ${fixed ? 'header--fixed' : ''} ${transparent ? 'header--transparent' : ''}`}
    >
      <div className="header__container">
        <Navigation />
        <MobileNavigation isOpen={isOpen} onToggle={toggle} />
      </div>
    </header>
  );
};

export default Header;
