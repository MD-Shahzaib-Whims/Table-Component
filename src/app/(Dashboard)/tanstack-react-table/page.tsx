// import React from 'react';
// import { ColumnDef } from '@tanstack/react-table';
// import { AdvancedDataTable } from '@/components';

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };

// const data: User[] = [
//   { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
//   { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
//   { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
//   { id: 4, name: 'David', email: 'david@example.com', age: 40 },
// ];

// const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//   },
//   {
//     accessorKey: 'name',
//     header: 'Name',
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'age',
//     header: 'Age',
//   },
// ];

// const HomePage = () => {
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-6">Advanced Data Table</h1>
//       <AdvancedDataTable columns={columns} data={data} />
//     </div>
//   );
// };

// export default HomePage;
