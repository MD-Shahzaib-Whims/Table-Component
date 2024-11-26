// "use client"
// import React, { useState, useMemo } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const AdvancedTable = ({ rowData }: any) => {
//   const [gridApi, setGridApi] = useState(null);
//   const [gridColumnApi, setGridColumnApi] = useState(null);
//   const [quickFilterText, setQuickFilterText] = useState('');

//   // Define columns with sorting enabled
//   const columnDefs = useMemo(() => [
//     { headerName: 'ID', field: 'id', sortable: true, filter: true },
//     { headerName: 'Name', field: 'name', sortable: true, filter: true },
//     { headerName: 'Age', field: 'age', sortable: true, filter: true },
//     { headerName: 'Email', field: 'email', sortable: true, filter: true },
//   ], []);

//   const defaultColDef = useMemo(() => ({
//     flex: 1,
//     minWidth: 100,
//     sortable: true,
//     filter: true,
//     resizable: true,
//   }), []);

//   // Handle grid ready
//   const onGridReady = (params: { api: React.SetStateAction<null>; columnApi: React.SetStateAction<null>; }) => {
//     setGridApi(params.api);
//     setGridColumnApi(params.columnApi);
//   };

//   // Quick filter for search functionality
//   const onQuickFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuickFilterText(value);
//     if (gridApi) {
//       (gridApi as any).setQuickFilter(value); // Temporarily type-cast if TS doesn’t resolve it
//     }
//   };

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <div style={{ marginBottom: 10 }}>
//         <input
//           type="text"
//           placeholder="Search..."
//           onChange={onQuickFilterChange}
//           style={{ width: '300px', padding: '8px' }}
//         />
//       </div>
//       <div
//         className="ag-theme-alpine"
//         style={{ height: '500px', width: '100%' }}
//       >
//         <AgGridReact
//           rowData={rowData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           onGridReady={onGridReady}
//         />
//       </div>
//     </div>
//   );
// };

// export default AdvancedTable;