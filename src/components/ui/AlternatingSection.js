'use client';

import React from 'react';

const AlternatingSection = ({
  children,
  reverse = false,
  className = '',
  style = {},
}) => {
  return (
    <section
      className={`alternating-section ${reverse ? 'alternating-section--reverse' : ''} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
};

export default AlternatingSection;
