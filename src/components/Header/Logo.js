import React from 'react';

const Logo = ({ size = 'md', showText = true, href = '/' }) => {
  const handleClick = (e) => {
    if (href === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={href} className={`logo logo--${size}`} onClick={handleClick}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="logo__icon">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      {showText && <strong className="logo__text">Swapnil Katiyar</strong>}
    </a>
  );
};

export default Logo;
