import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Box} from '@mui/material';
import { useEffect, useState } from 'react';

interface I_Data {
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
}

const Component1 = () => {

    const [Data, setData] = useState<I_Data[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const abcd:I_Data[] = Object.keys(data).map(key => data[key])
            setData(abcd);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'id',
            type: 'number',
            width: 80,
            editable: true,
        },
        {
            field: 'userId',
            headerName: 'userId',
            type: 'number',
            width: 80,
            editable: true,
        },
        {
            field: 'title',
            headerName: 'title',
            width: 370,
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
        },
        {
            field: 'body',
            headerName: 'body',
            width: 370,
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            
        },
    ];

  return (
    <div>
        <h1 style={{display:'flex', justifyContent:'center'}}>Component-1</h1>
        <Box sx={{ height: 320, width: '100%' }}>
            <DataGrid
                rows={Data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </div>
  )
}

export default Component1