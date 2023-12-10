import React, { useEffect, useState } from 'react'
import './StatusDashboard.css'

import { IoAdd } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import UserCard from './UserCard';

const UserDashboard = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const profileImg = {
    "usr-1": "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
    "usr-2": "https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg",
    "usr-3": "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
    "usr-4": "https://steamdaily.com/wp-content/uploads/2019/05/bill-gates-profile-pic.jpg",
    "usr-5": "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
    fallback: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); 
        const result = await response.json();
        setTickets(result.tickets);
        setUsers(result.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const backlogTickets = tickets.filter((ticket) => ticket.status === 'Backlog');

  return (
    <div className='statusDashboard'>
        <div className='statusDashboardContainer'>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className='statusDashboardSections'>
            <div>
            <div>
                
            <div className='userTicketsContainer'>
  {users.map((user) => {
    const userTickets = tickets.filter((ticket) => ticket.userId === user.id);

    return (
      <div key={user.id}>
        <div className='sectionHead'>
          <p className='sectionName'>
          <div className='photoContainer'>
  <img className='profileImg' width="25" height="25" src={profileImg[user.id] || profileImg.fallback} alt="noimgavail"/>
  {user.available ? (
    <div className='available' />
  ) : (
    <div className='notAvailable' />
  )}
</div> {user.name}{' '}
            <span className='ticketLength'>{userTickets.length}</span>
          </p>
          <div className='optionToolbar'>
            <IoAdd />
            <SlOptions />
          </div>
        </div>
        {userTickets.length > 0 && (
          <div className='usersContainer'>
            {userTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((userTicket) => (
              <UserCard
                key={userTicket.id}
                title={userTicket.title}
                id={userTicket.id}
                status={userTicket.status}
                priority={userTicket.priority}
                tag={userTicket.tag}
              />
            ))}
          </div>
        )}
      </div>
    );
  })}
</div>


            </div>
          </div>




            

        </div>
      )}
      </div>
    </div>
  )
}

export default UserDashboard