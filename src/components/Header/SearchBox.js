'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getContent } from '../../data/content.js';

const SearchBox = ({ isOpen, onToggle }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // Mock search results for now
  const mockResults = [
    {
      type: 'page',
      title: 'About Me',
      url: '/about',
      description: 'Learn about my journey',
    },
    {
      type: 'page',
      title: 'Projects',
      url: '/projects',
      description: 'View my portfolio',
    },
    {
      type: 'page',
      title: 'Experience',
      url: '/experience',
      description: 'Professional background',
    },
    {
      type: 'page',
      title: 'Contact',
      url: '/contact',
      description: 'Get in touch',
    },
    {
      type: 'project',
      title: 'eCommerce Platform',
      url: '/projects/ecommerce',
      description: 'React, Redux, SCSS',
    },
    {
      type: 'project',
      title: 'Gaming Platform',
      url: '/projects/gaming',
      description: 'Next.js, Tailwind',
    },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      const filtered = mockResults.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onToggle();
    }
  };

  return (
    <div className="search-box search-box--always-visible">
      <div className="search-box__input-wrapper">
        <svg
          className="search-box__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="search-box__input"
          placeholder={getContent('navigation.searchPlaceholder')}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {results.length > 0 && (
        <div className="search-box__results">
          {results.map((result, index) => (
            <a key={index} href={result.url} className="search-box__result">
              <div className="search-box__result-type">{result.type}</div>
              <div className="search-box__result-title">{result.title}</div>
              <div className="search-box__result-description">
                {result.description}
              </div>
            </a>
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="search-box__no-results">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBox;
