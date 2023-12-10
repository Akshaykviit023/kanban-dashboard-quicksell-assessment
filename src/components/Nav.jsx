import React, { useEffect, useState, useRef } from 'react'

import './Nav.css'

import { IoChevronDownOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Nav = ({ onDataFromChild }) => {
  const [displayToggle, setDisplayToggle] = useState(false);
  const [groupingItemValue, setGroupingItemValue] = useState(() => {
    return localStorage.getItem('groupingItemValue') || 'Status';
  });
  const [orderingItemValue, setOrderingItemValue] = useState(() => {
    return localStorage.getItem('orderingItemValue') || 'Priority';
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDisplayToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedGroupingItemValue = localStorage.getItem('groupingItemValue');
    const storedOrderingItemValue = localStorage.getItem('orderingItemValue');

    setGroupingItemValue(storedGroupingItemValue || 'Status');
    setOrderingItemValue(storedOrderingItemValue || 'Priority');
  }, []);

  useEffect(() => {
     localStorage.setItem('groupingItemValue', groupingItemValue);
     localStorage.setItem('orderingItemValue', orderingItemValue);

    onDataFromChild(groupingItemValue, orderingItemValue);
  }, [groupingItemValue, orderingItemValue, onDataFromChild])

  return (
    <div className='nav'>
      <div className='navContainer'>
        <button className='displayState' onClick={() => setDisplayToggle(prev => !prev)}><VscSettings className='textIcons'/> Display <IoChevronDownOutline className='textIcons'/></button>

        {displayToggle && (
          <div className='displayToggleContainer' ref={containerRef}>
            <div className='groupingItem'>
            <p>Grouping</p>
            <select value={groupingItemValue} onChange={(e) => setGroupingItemValue(e.target.value)}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
            </div>

            <div className='orderingItem'>
            <p>Ordering</p>
            <select value={orderingItemValue} onChange={(e) => setOrderingItemValue(e.target.value)}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav