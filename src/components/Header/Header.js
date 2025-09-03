'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import SearchBox from './SearchBox';
import useMobileMenu from '../../hooks/useMobileMenu';
import { getContent } from '../../data/content.js';

const Header = ({ className = '', fixed = true, transparent = false }) => {
  const { isOpen, toggle } = useMobileMenu();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      className={`header ${className} ${fixed ? 'header--fixed' : ''} ${transparent ? 'header--transparent' : ''}`}
    >
      <div className="header__container">
        {/* Left: Logo */}
        <div className="header__left">
          <Link href="/" className="logo">
            <div className="logo__icon">
              <img
                src="/swapnil.jpeg"
                alt={getContent('global.author')}
                width="24"
                height="24"
              />
            </div>
            <span className="logo__text logo__text--desktop">
              {getContent('global.author')}
            </span>
          </Link>
        </div>

        {/* Center: Search */}
        <div className="header__center">
          <SearchBox
            isOpen={searchOpen}
            onToggle={() => setSearchOpen(!searchOpen)}
          />
        </div>

        {/* Right: Navigation */}
        <div className="header__right">
          <Navigation />
        </div>

        {/* Mobile Navigation */}
        <div className="header__mobile">
          <MobileNavigation isOpen={isOpen} onToggle={toggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
