'use client';

import React from 'react';
import Link from 'next/link';

const NavLink = ({
  href,
  children,
  active = false,
  external = false,
  onClick,
  mobile = false,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick();
    }

    // Handle smooth scrolling for internal links
    if (!external && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const className = `${mobile ? 'mobile-nav-link' : 'nav-link'} ${active ? (mobile ? 'mobile-nav-link--active' : 'nav-link--active') : ''}`;

  if (external) {
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavLink;
