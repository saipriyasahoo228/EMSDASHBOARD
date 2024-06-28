import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useDropdown from './Sidenavscript';

const Sidebar = () => {
  const [dropdown, toggleDropdown] = useDropdown();

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>Sidebar Menu</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <button className="dropdown-btn" onClick={() => toggleDropdown('home')}>
            <FontAwesomeIcon icon={faHome} /> Home <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdown.home && (
            <ul className="dropdown-container">
              <li><a href="#">Subitem 1</a></li>
              <li><a href="#">Subitem 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <button className="dropdown-btn" onClick={() => toggleDropdown('profile')}>
            <FontAwesomeIcon icon={faUser} /> Profile <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdown.profile && (
            <ul className="dropdown-container">
              <li><a href="#">Subitem 1</a></li>
              <li><a href="#">Subitem 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <button className="dropdown-btn" onClick={() => toggleDropdown('settings')}>
            <FontAwesomeIcon icon={faCogs} /> Settings <FontAwesomeIcon icon={faCaretDown} />
          </button>
          {dropdown.settings && (
            <ul className="dropdown-container">
              <li><a href="#">Subitem 1</a></li>
              <li><a href="#">Subitem 2</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
