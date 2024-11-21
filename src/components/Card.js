import React from 'react';
import './Card.css';
import { ReactComponent as No_priority } from './icons/No-priority.svg';
import { ReactComponent as High } from './icons/Img - High Priority.svg';
import { ReactComponent as Low } from './icons/Img - Low Priority.svg';
import { ReactComponent as Medium } from './icons/Img - Medium Priority.svg';
import { ReactComponent as Urgent } from './icons/SVG - Urgent Priority colour.svg';


const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name.charAt(0)}
        </div>
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-footer">
        <span className="priority-tag">
          {ticket.priority === 4 ? <Urgent /> : 
           ticket.priority === 3 ? <High /> :
           ticket.priority === 2 ? <Medium /> :
           ticket.priority === 1 ? <Low /> : <No_priority />}
        </span>
        <span className="feature-tag">
          {ticket.tag.join(', ')}
        </span>
      </div>
    </div>
  );
};

export default Card;
