import React, { useEffect, useState } from 'react'
import './StatusDashboard.css'
import Card from './Card';

import { IoAdd } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

const StatusDashboard = () => {
    const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); 
        const result = await response.json();
        setTickets(result.tickets);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const todoTickets = tickets.filter((ticket) => ticket.status === 'Todo');
  const inProgressTickets = tickets.filter((ticket) => ticket.status === 'In progress');
  const backlogTickets = tickets.filter((ticket) => ticket.status === 'Backlog');
  const doneTickets = tickets.filter((ticket) => ticket.status === 'Done');
  const cancelledTickets = tickets.filter((ticket) => ticket.status === 'Cancelled');

  return (
    <div className='statusDashboard'>
        <div className='statusDashboardContainer'>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className='statusDashboardSections'>
            <div>
            <div>
                <div className='sectionHead'>
              <p className='sectionName'><img width="20" height="20" src="https://img.icons8.com/color/20/high-priority.png" alt="high-priority"/> Backlog <span className='ticketLength'>{backlogTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {backlogTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((ticket) => (
                <Card
                dashboard="status"
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                priority={ticket.priority}
                tag={ticket.tag}
                userId={ticket.userId}
              />
              ))}
            </div>
          </div>




            <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><img width="20" height="20" src="https://img.icons8.com/color/20/todo-list--v1.png" alt="todo-list--v1"/> Todo <span className='ticketLength'>{todoTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {todoTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                priority={ticket.priority}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>



          <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><img width="20" height="20" src="https://img.icons8.com/color/20/in-progress--v1.png" alt="in-progress--v1"/> In Progress <span className='ticketLength'>{inProgressTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {inProgressTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                priority={ticket.priority}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>




          



          <div>
            <div>
                <div className='sectionHead'>
              <p className='sectionName'><img width="20" height="20" src="https://img.icons8.com/color/20/checked--v1.png" alt="checked--v1"/> Done <span className='ticketLength'>{doneTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {doneTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                priority={ticket.priority}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>




          <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><img width="20" height="20" src="https://img.icons8.com/color/20/cancel--v1.png" alt="cancel--v1"/> Cancelled <span className='ticketLength'>{cancelledTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {cancelledTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      else if(orderingItemValue === 'Priority'){
        return b.priority - a.priority;
      }
      return 0; 
    }).map((ticket) => (
                <Card
                  key={ticket.id}
                  title={ticket.title}
                  id={ticket.id}
                  status={ticket.status}
                  priority={ticket.priority}
                  tag={ticket.tag}
                />
              ))}
            </div>
          </div>

        </div>
      )}
      </div>
    </div>
  )
}

export default StatusDashboard