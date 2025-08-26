'use client';

import React from 'react';
import NavLink from './NavLink';

const MobileNavigation = ({
  items = [],
  isOpen = false,
  onToggle,
  onItemClick,
}) => {
  // Default navigation items
  const defaultItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'experience', label: 'Experience', href: '/experience' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-menu-button"
        onClick={onToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        onClick={onToggle}
      >
        <div
          className="mobile-menu__content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu__header">
            <button
              className="mobile-menu__close"
              onClick={onToggle}
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <ul className="mobile-menu__list">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  href={item.href}
                  external={item.external}
                  mobile={true}
                  onClick={() => {
                    onItemClick?.(item);
                    onToggle?.();
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
