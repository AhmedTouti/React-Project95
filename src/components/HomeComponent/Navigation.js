import { Button, Avatar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout } from '../APPDATA/DataBaseHandler'
import { AuthenticationNo } from '../APPDATA/GLOBALdataREDUX'
import { useNavigate } from "react-router-dom";



const Navigation = () => {
    let stateAuth = useSelector(state => state)
    let dispatch = useDispatch();
    let navigate=useNavigate();

    return (<>

        <AppBar style={{ width: '100%' }} position='static' >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Avatar sx={{ bgcolor: '#1e88e5' }}>G95</Avatar>
                </Typography>
                <label>{stateAuth.auth ? stateAuth.name : ''}</label>

                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                {stateAuth.auth ? '' : <Button>  <Link style={{ color: 'white',textDecoration: 'none' }} to='/Login'>Login</Link></Button>}

                {stateAuth.auth ? '' : <Button>  <Link style={{ color: 'white',textDecoration: 'none' }} to='/SignIn'>SignIn</Link></Button>}
                <Button  > <Link style={{ color: 'white',textDecoration: 'none' }} to='/'>Home </Link></Button>
                {stateAuth.auth ? 
                <Button color="inherit" onClick={() => {
                    Logout().then((
                    ) => {
                        dispatch({ type: AuthenticationNo });
                        navigate('/');
                    }).catch((err) => {
                        console.log(err, 'dosomthing about it from catch of nav/logout')
                    });

                }} >Logout</Button> : <Button color="inherit" onClick={() => {
                    Logout().then((
                    ) => {
                        dispatch({ type: AuthenticationNo });
                        navigate('/');
                    }).catch((err) => {
                        console.log(err, 'dosomthing about it from catch of nav/logout')
                    });

                }} >Logout</Button>}



            </Toolbar>
        </AppBar>

    </>);
}

export default Navigation;