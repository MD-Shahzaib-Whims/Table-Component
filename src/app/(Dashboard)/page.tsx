import { AdvancedDataTable, AgGridDataTable } from '@/components';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

const Home = () => {
  // Define user type
  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
  };

  // Table data
  const data: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { id: 4, name: 'David', email: 'david@example.com', age: 40 },
    { id: 5, name: 'Edward', email: 'edward@example.com', age: 40 },
  ];

  // Table columns
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{
        textAlign: "center", // Use proper value (e.g., 'left', 'right', 'center')
        marginBottom: "20px",
        fontSize: "1.5rem",
        color: "#333",
      }}>Advanced AG Grid Table</h1>
      <section style={{
        margin: '40px',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <AgGridDataTable rowData={data} />
      </section>

      <h1 style={{
        textAlign: "center", // Use proper value (e.g., 'left', 'right', 'center')
        marginBottom: "20px",
        fontSize: "1.5rem",
        color: "#333",
      }}>Advanced Tanstack Table</h1>
      <section style={{
        margin: '40px',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <AdvancedDataTable columns={columns} data={data} />
      </section>
    </div>
  );
}

export default Home;
