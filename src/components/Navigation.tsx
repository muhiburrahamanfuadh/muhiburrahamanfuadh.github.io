import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/academics', label: 'Academics' },
  { path: '/research', label: 'Research' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Technical Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/honors-awards', label: 'Honors & Awards' },
  { path: '/activities', label: 'Activities' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="editorial-header">
      <nav className="editorial-nav" aria-label="Main navigation">
        <Link className="editorial-brand" to="/" aria-label="Muhibur Rahaman Fuadh — Home">
          <span className="editorial-brand-name">Muhibur Rahaman Fuadh</span>
          <span className="editorial-brand-meta">PHYSICS · MATERIALS SCIENCE</span>
        </Link>
        <div className="editorial-nav-links">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} aria-current={location.pathname === item.path ? 'page' : undefined}
              className={`editorial-nav-link ${location.pathname === item.path ? 'is-active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </div>
        <button className="editorial-menu-button" type="button" aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen} aria-controls="editorial-mobile-nav" onClick={() => setIsOpen(value => !value)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {isOpen && (
        <div id="editorial-mobile-nav" className="editorial-mobile-nav">
          {navItems.map(item => <Link key={item.path} to={item.path}
            aria-current={location.pathname === item.path ? 'page' : undefined}
            className={location.pathname === item.path ? 'is-active' : ''}>{item.label}</Link>)}
        </div>
      )}
    </header>
  );
}
