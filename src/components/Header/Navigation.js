import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

const Navigation = ({ items = [], activeSection = '', onItemClick }) => {
  // Default navigation items
  const defaultItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'experience', label: 'Experience', href: '/experience' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const navigationItems = items.length > 0 ? items : defaultItems;

  return (
    <nav className="navigation">
      <Logo />
      <div className="navigation__spacer" />
      <ul className="navigation__list">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <NavLink
              href={item.href}
              active={activeSection === item.id}
              external={item.external}
              onClick={() => onItemClick?.(item)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
