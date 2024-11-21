import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, groupingOption, sortOption }) => {
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  // Define the custom order for priority groups
  const customOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];

  const groupAndSortTickets = () => {
    let groups = {};

    // Group tickets
    tickets.forEach((ticket) => {
      let key;
      switch (groupingOption) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          const user = users.find((u) => u.id === ticket.userId);
          key = user ? user.name : 'Unassigned';
          break;
        case 'priority':
          key = priorityLabels[ticket.priority];
          break;
        default:
          key = 'Other';
      }

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(ticket);
    });

    // Sort tickets within each group
    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => {
        if (sortOption === 'priority') {
          return b.priority - a.priority;
        }
        return a.title.localeCompare(b.title);
      });
    });

    // Order groups based on custom priority
    const orderedGroups = {};
    const sortedKeys = groupingOption === 'priority'
      ? customOrder
      : Object.keys(groups);

    sortedKeys.forEach((key) => {
      if (groups[key]) {
        orderedGroups[key] = groups[key];
      }
    });

    return orderedGroups;
  };

  const groups = groupAndSortTickets();

  return (
    <div className="board">
      {Object.entries(groups).map(([groupName, groupTickets]) => (
        <Column
          key={groupName}
          title={groupName}
          tickets={groupTickets}
          users={users}
        />
      ))}
    </div>
  );
};

export default Board;
