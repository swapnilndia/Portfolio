import React from 'react';

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

  const linkProps = {
    href,
    onClick: handleClick,
    className: `${mobile ? 'mobile-nav-link' : 'nav-link'} ${active ? (mobile ? 'mobile-nav-link--active' : 'nav-link--active') : ''}`,
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  return <a {...linkProps}>{children}</a>;
};

export default NavLink;
