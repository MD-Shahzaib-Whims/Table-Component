"use client";
import { TableContainer } from '@/components';
import { useState } from 'react';

const DataTableReact = () => {

    // Demo Head data
    const [ThLabels, setThLabels] = useState([
        "Name",
        "Position",
        "Office",
        "Extension",
        "Start",
        "Salary",
    ]);

    // Demo Row data
    const [tableData, setTableData] = useState([
        [
            'Tiger Nixon',
            'System Architect',
            'Edinburgh',
            '5421',
            '2011-04-25',
            '$320,800',
        ],
        [
            'Garrett Winters',
            'Accountant',
            'Tokyo',
            '8422',
            '2011-07-25',
            '$170,750',
        ],
        [
            'Tiger Nixon',
            'System Architect',
            'Edinburgh',
            '5421',
            '2011-04-25',
            '$320,800',
        ],
        [
            'Garrett Winters',
            'Accountant',
            'Tokyo',
            '8422',
            '2011-07-25',
            '$170,750',
        ],
    ]);


    return (
        <div>
            <h1>Table Demo</h1>
            <div className='bg-slate-100 p-5'>
                <TableContainer
                    TRows={tableData}
                    tHeads={ThLabels}
                />
            </div>
        </div>
    );
}

export default DataTableReact;