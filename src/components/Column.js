import React from 'react';
import Card from './Card';
import './Column.css';
import { ReactComponent as NoPriority } from './icons/No-priority.svg';
import { ReactComponent as HighPriority } from './icons/Img - High Priority.svg';
import { ReactComponent as LowPriority } from './icons/Img - Low Priority.svg';
import { ReactComponent as MediumPriority } from './icons/Img - Medium Priority.svg';
import { ReactComponent as UrgentPriority } from './icons/SVG - Urgent Priority colour.svg';
import { ReactComponent as ToDo } from './icons/To-do.svg';
import { ReactComponent as InProgress } from './icons/in-progress.svg';
import { ReactComponent as Done } from './icons/Done.svg';
import { ReactComponent as Backlog } from './icons/Backlog.svg';
import { ReactComponent as Add } from './icons/add.svg';
import { ReactComponent as Dots } from './icons/3 dot menu.svg';

const Column = ({ title, tickets, users }) => {
  // Function to render the correct icon based on the title (priority)
  const renderPriorityIcon = (priority) => {
    switch (priority.toLowerCase()) {
      case 'no priority':
        return <NoPriority className="priority-icon" />;
      case 'high':
        return <HighPriority className="priority-icon" />;
      case 'medium':
        return <MediumPriority className="priority-icon" />;
      case 'low':
        return <LowPriority className="priority-icon" />;
      case 'urgent':
        return <UrgentPriority className="priority-icon" />;
      case 'todo':
        return <ToDo className="priority-icon" />;
      case 'in progress':
        return <InProgress className="priority-icon" />;
      case 'backlog':
      return <Backlog className="priority-icon" />;
      default:
        return null; // No icon if the priority doesn't match
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <div className="priority-header">
          {renderPriorityIcon(title)}
          <h3 className="priority-title">{title}</h3>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="icons-container">
          <span className="add"><Add /></span>
        </div>
      </div>

      <div className="column-content">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
