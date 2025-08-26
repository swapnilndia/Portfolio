import React from 'react';

const IconButton = ({
  children,
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}) => {
  const baseClass = 'icon-btn';
  const sizeClass = `icon-btn--${size}`;
  const disabledClass = disabled ? 'icon-btn--disabled' : '';

  return (
    <button
      type="button"
      className={`${baseClass} ${sizeClass} ${disabledClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
