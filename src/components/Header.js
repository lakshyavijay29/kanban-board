import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Display } from './icons/Display.svg';
import { ReactComponent as Down } from './icons/down.svg';

const Header = ({ groupingOption, sortOption, setGroupingOption, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="icon">
          <Display />
        </span>
        Display
        <span className="icon">
          <Down />
        </span>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={groupingOption}
              onChange={(e) => setGroupingOption(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          
          <div className="dropdown-item">
            <span>Ordering</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;