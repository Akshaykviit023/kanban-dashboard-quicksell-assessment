import React, { useState } from 'react'

import './App.css';
import Nav from './components/Nav';
import StatusDashboard from './components/StatusDashboard';
import UserDashboard from './components/UserDashboard';
import PriorityDashboard from './components/PriorityDashboard';

function App() {
  const [groupingItemValue, setGroupingItemValue] = useState("");
  const [orderingItemValue, setOrderingItemValue] = useState("");

  const handleDataFromChild = (data1, data2) => {
    setGroupingItemValue(data1);
    setOrderingItemValue(data2);
  };

  return (
    <div className="App">
      <Nav onDataFromChild={handleDataFromChild}/>
      {groupingItemValue === "Status" && (
        <StatusDashboard />
      )}
      {groupingItemValue === "User" && (
        <UserDashboard />
      )}
      {groupingItemValue === "Priority" && (
        <PriorityDashboard />
      )}
    </div>
  );
}

export default App;
