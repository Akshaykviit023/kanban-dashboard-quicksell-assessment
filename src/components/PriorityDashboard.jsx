import React, { useEffect, useState } from 'react'
import './StatusDashboard.css'
import Card from './Card';

import { IoAdd } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { PiCellSignalNoneFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalFullFill } from "react-icons/pi";
import { FaExclamationCircle } from "react-icons/fa";

const PriorityDashboard = () => {
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

  const noPriorityTickets = tickets.filter((ticket) => ticket.priority === 0);
  const lowPriorityTickets = tickets.filter((ticket) => ticket.priority === 1);
  const mediumPriorityTickets = tickets.filter((ticket) => ticket.priority === 2);
  const highPriorityTickets = tickets.filter((ticket) => ticket.priority === 3);
  const urgentPriorityTickets = tickets.filter((ticket) => ticket.priority === 4);

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
              <p className='sectionName'><PiCellSignalNoneFill className='priorityLogo' /> No Priority <span className='ticketLength'>{noPriorityTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {noPriorityTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>




            <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><PiCellSignalLowFill className='priorityLogo' /> Low <span className='ticketLength'>{lowPriorityTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {lowPriorityTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>



          <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><PiCellSignalMediumFill className='priorityLogo' /> Medium <span className='ticketLength'>{mediumPriorityTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {mediumPriorityTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>




          



          <div>
            <div>
                <div className='sectionHead'>
              <p className='sectionName'><PiCellSignalFullFill className='priorityLogo' /> High <span className='ticketLength'>{highPriorityTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {highPriorityTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    }).map((ticket) => (
                <Card
                key={ticket.id}
                title={ticket.title}
                id={ticket.id}
                status={ticket.status}
                tag={ticket.tag}
              />
              ))}
            </div>
          </div>




          <div>
            <div>
            <div className='sectionHead'>
              <p className='sectionName'><FaExclamationCircle className='priorityLogoUrgent'/> Urgent <span className='ticketLength'>{urgentPriorityTickets.length}</span></p>
              <div className='optionToolbar'><IoAdd /> <SlOptions /></div>
              </div>
              {urgentPriorityTickets.sort((a, b) => {
                const orderingItemValue = localStorage.getItem('orderingItemValue');
      if (orderingItemValue === 'Title') {
        return a.title.localeCompare(b.title); 
      }
      return 0; 
    }).map((ticket) => (
                <Card
                  key={ticket.id}
                  title={ticket.title}
                  id={ticket.id}
                  status={ticket.status}
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

export default PriorityDashboard