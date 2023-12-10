import React from 'react'

import './Card.css'

import { PiCellSignalNoneFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalFullFill } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Card = ({ dashboard, title, id, status, priority, tag, userId }) => {
    const priorityIcons = {
        0: <PiCellSignalNoneFill />,
        1: <PiCellSignalLowFill />,
        2: <PiCellSignalMediumFill />,
        3: <PiCellSignalFullFill />,
        4: <FaExclamationCircle />
      };
      
      const profileImg = {
        "usr-1": "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
        "usr-2": "https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg",
        "usr-3": "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
        "usr-4": "https://steamdaily.com/wp-content/uploads/2019/05/bill-gates-profile-pic.jpg",
        "usr-5": "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
        fallback: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        
      }


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
        <div className='cardHeader'>
      <p className='cardId'>{id}</p>
      <div className='photoContainer'>
  <img className='profileImg' width="25" height="25" src={profileImg[userId] || profileImg.fallback} alt="noimgavail"/>

    <div className='available' />
  
</div>
        </div>
      <p className='cardTitle'>
        { dashboard != "status" && (
        <img width="20" height="20" src={statusIndicator[status]} alt="high-priority"/>)
 } <span>{title}</span></p>
      <div className='bottomLine'>
        {priority != null && (
            <div className='cardPriority'>{priorityIcons[priority]}</div>
        )}
      
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

export default Card