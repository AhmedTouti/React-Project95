import Navigation from "./Navigation";
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button } from "@material-ui/core";
//TODO grid with data from firebase


const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4, col1: 'test', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 5, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 6, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 7, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 8, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 9, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 10, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 11, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 12, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 13, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 14, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 15, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 16, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 17, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 18, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 19, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 20, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 21, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 22, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 23, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 24, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' },
    { id: 25, col1: 'Hello', col2: 'World' , col3: 'World' , col4: 'World' , col5: 'World' }


];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'ClientName', width: 150 },
    { field: 'col2', headerName: 'LastName', width: 150 },
    { field: 'col3', headerName: 'LastName', width: 150 },
    { field: 'col4', headerName: 'LastName', width: 150 },
    { field: 'col5', headerName: 'LastName', width: 150 },

];


const Managment = () => {
    return (<><Navigation />


            <DataGrid rows={rows} columns={columns} />
        
     
    </>);
}

export default Managment;