import { useState } from 'react';

const Sidenavscript = () => {
  const [dropdown, setDropdown] = useState({ home: false, profile: false, settings: false });

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  return [dropdown, toggleDropdown];
};

export default Sidenavscript;
