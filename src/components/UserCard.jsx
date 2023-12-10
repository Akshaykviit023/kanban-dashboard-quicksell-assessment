import React from 'react'

import './Card.css'

import { PiCellSignalNoneFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalFullFill } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const UserCard = ({ title, id, status, priority, tag }) => {
    const priorityIcons = {
        0: <PiCellSignalNoneFill />,
        1: <PiCellSignalLowFill />,
        2: <PiCellSignalMediumFill />,
        3: <PiCellSignalFullFill />,
        4: <FaExclamationCircle />
      };

      const statusIndicator = {
        "Backlog": "https://img.icons8.com/color/20/high-priority.png",
        "Todo": "https://img.icons8.com/color/20/todo-list--v1.png",
        "In progress": "https://img.icons8.com/color/20/in-progress--v1.png",
        "Done": "https://img.icons8.com/color/20/checked--v1.png",
        "Canceled": "https://img.icons8.com/color/20/cancel--v1.png",
        
      }
      
  return (
    <div className='card'>
        <div className='cardContainer'>
      <p className='cardId'>{id}</p>
      <p className='cardTitle'>
        <img width="20" height="20" src={statusIndicator[status]} alt="high-priority"/> <span>{title}</span></p>
      <div className='bottomLine'>
      <div className='cardPriority'>{priorityIcons[priority]}</div>
      <div>
        {tag.map((t) => (
            <div className='cardTag'>
                <p><GoDotFill /> {t}</p>
            </div>
        ))}
      </div>
      </div>
        </div>
    </div>
  )
}

export default UserCard