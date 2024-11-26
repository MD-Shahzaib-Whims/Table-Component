
import { AdvancedDataTable, AgGridDataTable } from '@/components';
import React from 'react';

const Home = () => {
  const rowData = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
    { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' },
    { id: 5, name: 'Edward', age: 40, email: 'edward@example.com' },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Advanced AG Grid Table</h1>
      <AgGridDataTable rowData={rowData} />
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Advanced Tanstack Table</h1>
      <AdvancedDataTable columns={[]} data={rowData} />
    </div>
  );
};

export default Home;
