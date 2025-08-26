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

      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
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
