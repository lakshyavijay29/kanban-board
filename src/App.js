// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem('groupingOption') || 'status'
  );
  const [sortOption, setSortOption] = useState(
    localStorage.getItem('sortOption') || 'priority'
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Replace this with the provided API endpoint
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
    localStorage.setItem('sortOption', sortOption);
  }, [groupingOption, sortOption]);

  return (
    <div className="app">
      <Header 
        groupingOption={groupingOption}
        sortOption={sortOption}
        setGroupingOption={setGroupingOption}
        setSortOption={setSortOption}
      />
      <Board 
        tickets={tickets}
        users={users}
        groupingOption={groupingOption}
        sortOption={sortOption}
      />
    </div>
  );
}

export default App;