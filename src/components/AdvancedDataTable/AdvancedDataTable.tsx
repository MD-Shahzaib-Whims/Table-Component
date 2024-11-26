"use client";
import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    ColumnDef,
    SortingState,
} from '@tanstack/react-table';

type DataTableProps<T extends object> = {
    data: T[];
    columns: ColumnDef<T>[];
};

const AdvancedDataTable = <T extends object>({
    data,
    columns,
}: DataTableProps<T>) => {
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="rounded-lg shadow border border-gray-200 overflow-hidden">
            <table className="table-auto w-full text-left border-collapse">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="bg-gray-100 border-b">
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="px-4 py-2 font-medium cursor-pointer"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : typeof header.column.columnDef.header === 'function'
                                            ? (header.column.columnDef.header as Function)(header.getContext())
                                            : header.column.columnDef.header}
                                    {header.column.getIsSorted() === 'asc' && ' 🔼'}
                                    {header.column.getIsSorted() === 'desc' && ' 🔽'}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-t hover:bg-gray-50">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-2">
                                    {cell.renderValue() as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdvancedDataTable;
