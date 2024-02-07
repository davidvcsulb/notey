// src/components/NavBar/NavBar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      {/* You are currently within the Home page */}
      {location.pathname === '/' && ( 
        <ul>
          <li><Link to="/create">Create New</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      )}
      {/* You are currently within the create page */}
      {location.pathname === '/create' && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      )}
      {/* You are currently within the settings page */}
      {location.pathname === '/settings' && (
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      )}

      {/* Add more conditions as needed for other routes */}
    </nav>
  );
};

export default NavBar;
